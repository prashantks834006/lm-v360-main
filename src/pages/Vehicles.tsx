import { Divider } from '@mui/material';
import React from 'react';
import VehiclesGrid from '../modules/VehiclesGrid';
import Page from '../components/Page/Page';
import Breadcrumbs from '../components/BreadCrumbs/BreadCrumbs';
import { PATHS } from '../utils/constants';

const Vehicles = () => {
  const links = [
    {
      label: 'Dashboard',
      link: PATHS.dashboard,
    },
    {
      label: 'Vehicles',
      link: PATHS.vehicles,
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
