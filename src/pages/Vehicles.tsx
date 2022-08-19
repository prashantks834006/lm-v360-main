import { Divider } from '@mui/material';
import React from 'react';
import VehiclesGrid from '../modules/VehiclesGrid';
import Page from '../components/Page/Page';
import Breadcrumbs from '../components/BreadCrumbs/BreadCrumbs';

const Vehicles = () => {
  const links = [
    {
      label: 'Dashboard',
      link: '/',
    },
    {
      label: 'Vehicles',
      link: '/vehicles',
    },
  ];

  return (
    <Page sx={{ p: 1 }}>
      <Breadcrumbs links={links} />
      <Divider sx={{ mt: 1 }} />
      <VehiclesGrid />
    </Page>
  );
};

export default Vehicles;
