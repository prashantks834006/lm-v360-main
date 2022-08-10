import * as React from 'react';
import { useRoutes } from 'react-router-dom';
import AuthGuard from '../gaurds/AuthGuard';
import DashboardLayout from '../layouts/Dashboard';

// We can implement suspense for lazy loading components
import Dashboard from './Dashboard';
import Vehicles from './Vehicles';

function Routes() {
  return useRoutes([
    {
      path: '',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { path: '', element: <Dashboard />, index: true },
        { path: 'vehicles', element: <Vehicles />, index: true },
      ],
    },
  ]);
}

export default Routes;
