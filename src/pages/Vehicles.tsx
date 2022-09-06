import React from 'react';
import { Divider } from '@mui/material';
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
    <Page sx={{ p: 0.5 }}>
      <Breadcrumbs links={links} />
      <Divider sx={{ mt: 0.5 }} />
      <VehiclesGrid />
    </Page>
  );
};

export default Vehicles;
