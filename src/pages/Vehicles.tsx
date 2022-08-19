import { Box, Divider } from '@mui/material';
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import Page from '../components/Page/Page';
import Breadcrumbs from '../components/BreadCrumbs/BreadCrumbs';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

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
      <Box width="100vw" height="calc(100vh - 40px)">
        <AgGridReact />
      </Box>
    </Page>
  );
};

export default Vehicles;
