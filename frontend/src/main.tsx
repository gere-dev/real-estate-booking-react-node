import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './state/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import agent, { privateInstance } from './api/agent.ts';
import { logout } from './state/auth/authSlice.ts';
import { AxiosInterceptorOptions } from 'axios';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </>
);

privateInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

privateInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { status } = error.response;
    const previousRequest = error?.config;

    if (status === 403 && !previousRequest?.sent) {
      previousRequest.sent = true;
      const response = await agent.Auth.refresh();

      const newAccessToken = response.accessToken;
      console.log('requested for a new access token and returned a new one', newAccessToken);

      localStorage.setItem('accessToken', newAccessToken);
      previousRequest.headers.authorization = `Bearer ${newAccessToken}`;
      return privateInstance(previousRequest);
    }
    // store.dispatch(logout());
    console.error('Error refreshing token');
    return Promise.reject(error);
  }
);
