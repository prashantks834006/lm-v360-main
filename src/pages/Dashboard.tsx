import React from 'react';
import { Stack } from '@mui/material';
import CarList from '../modules/CarList';
import CustomerDetailsSection from '../modules/CustomerDetailsSection';
import Page from '../components/Page/Page';
import SummaryDashboard from '../modules/SummaryDashboard';

const Dashboard = () => {
  return (
    <Page sx={{ pt: 3 }}>
      <SummaryDashboard />
      <Stack direction="row" pt={2} alignItems="flex-start">
        <CarList />
        <CustomerDetailsSection />
      </Stack>
    </Page>
  );
};

export default Dashboard;
