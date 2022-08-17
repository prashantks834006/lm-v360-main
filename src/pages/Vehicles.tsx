import { Divider } from '@mui/material';
import React from 'react';
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
    <>
      <Breadcrumbs links={links} />
      <Divider sx={{ mt: 1 }} />
    </>
  );
};

export default Vehicles;
