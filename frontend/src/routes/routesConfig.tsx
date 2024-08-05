import { Home, Login, Register, Bookings, AddListing, Listings, NotFound, EditListings, FilteredProperties } from '@/pages';
import { Layout, Nav, PrivateRoute, Property } from '@/components';
import { RouteConfig } from '@/types';
import { RouteObject } from 'react-router-dom';

const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'property/:id', element: <Property /> },
      { path: 'filtered-properties', element: <FilteredProperties /> },
      {
        path: 'account/:userId',
        element: <PrivateRoute />,
        children: [
          { path: 'listings', element: <Listings /> },
          { path: 'bookings', element: <Bookings /> },
          { path: 'add-listing', element: <AddListing /> },
          { path: 'edit-listing/:propertyId', element: <EditListings /> },
        ],
      },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

export default routesConfig;
