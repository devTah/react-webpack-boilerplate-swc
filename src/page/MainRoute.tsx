import React, { useEffect } from 'react';
import ProtectedRoute from '@layouts/Auth/ProtectedRoute';
import AuthProvider from '@layouts/Auth/AuthProvider';
import MainWrapper from '@layouts/MainWrapper';
import {
  Navigate,
  RouterProvider,
  RouteObject,
  createHashRouter,
} from 'react-router-dom';
import useInjectLocales from '@hooks/useInjectLocales';
import { genCRUD } from '@utils/routerHelper';

import ErrorBoundary from './ErrorBoudary';
import HomePage from './Home';

export const declareRouter: RouteObject[] = [
  {
    element: <MainWrapper />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
    errorElement: <ErrorBoundary />,
  },
  //   {
  //     path: '/register',
  //     element: <Register />,
  //   },
];

const router = createHashRouter(declareRouter);
function MainRoute() {
  const { injected } = useInjectLocales();

  return (
    <AuthProvider>{injected && <RouterProvider router={router} />}</AuthProvider>
  );
}

export default MainRoute;
