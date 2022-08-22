import React from 'react';
import { Grid } from '@mui/material';
import CarList from '../modules/CarList';
import CustomerDetailsSection from '../modules/CustomerDetailsSection';
import Page from '../components/Page/Page';
import SummaryDashboard from '../modules/SummaryDashboard';

const Dashboard = () => {
  return (
    <Page sx={{ p: 1 }}>
      <SummaryDashboard />
      <Grid container sx={{ mt: 2 }} spacing={4}>
        <Grid item sm={12} md={7}>
          <CarList />
        </Grid>
        <Grid item sm={12} md={5}>
          <CustomerDetailsSection />
        </Grid>
      </Grid>
    </Page>
  );
};

export default Dashboard;
