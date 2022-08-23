import React from 'react';

import { LoginCallback } from '@okta/okta-react';
import { useRoutes } from 'react-router-dom';
import AuthGuard from '../gaurds/AuthGuard';
import DashboardLayout from '../layouts/Dashboard';
import Dashboard from './Dashboard';
import Vehicle from './Vehicle/Vehicle';
import Vehicles from './Vehicles';

const Routes = () => {
  return useRoutes([
    {
      path: '/login/callback',
      element: <LoginCallback />,
    },
    {
      path: '',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { path: '', element: <Dashboard />, index: true },
        { path: 'vehicles', element: <Vehicles /> },
        { path: 'vehicles/:vehicleId', element: <Vehicle /> },
      ],
    },
  ]);
};

export default Routes;
