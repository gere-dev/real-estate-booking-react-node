// routes.tsx
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import routesConfig from './routesConfig';

const buildRoutes = (routesConfig: RouteObject[]): RouteObject[] => {
  return routesConfig.map((route) => ({
    path: route.path,
    element: route.element,
    children: route.children ? buildRoutes(route.children) : undefined,
  }));
};

const router = createBrowserRouter(buildRoutes(routesConfig));

export default router;
