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
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor to handle token refresh on 401 Unauthorized responses
privateInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { status } = error.response;
    const originalRequest = error.config;

    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await agent.Auth.refresh();

        const newAccessToken = response.accessToken;

        // Update access token in Axios headers
        localStorage.setItem('accessToken', newAccessToken); // Update token in localStorage or sessionStorage if needed
        privateInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;

        // Retry original request with new access token
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return privateInstance(originalRequest);
      } catch (error) {
        console.error('Error refreshing token');
        store.dispatch(logout());
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
