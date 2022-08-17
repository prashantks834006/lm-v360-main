import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../modules/Header/Header';

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <Box sx={{ p: 1 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default DashboardLayout;
