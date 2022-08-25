import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import VehicleVerticalTabs from '../modules/VehicleVerticalTabs';
import Page from '../components/Page/Page';
import InfoHeader from '../modules/InfoHeader';
import Stepper from '../components/Stepper/Stepper';
import CustomerDetailsSection from '../modules/CustomerDetailsSection';

const Vehicle = () => {
  const steps = ['Reservation', 'Order', 'Production', 'Transit', 'Inspection', 'Delivery', 'Ownership'];

  return (
    <Page sx={{ backgroundColor: (theme) => theme.palette.grey[100] }}>
      <Box sx={{ p: 1 }}>
        <InfoHeader />
        <Box sx={{ p: 4 }}>
          <Grid container spacing={2}>
            <Grid item sm={12} md={6} lg={4}>
              <VehicleVerticalTabs />
            </Grid>
            <Grid item sm={12} md={6} lg={8}>
              <Paper sx={{ p: 2, height: '100%' }}>
                <Stepper activeStep={2} steps={steps} orientation="horizontal" />
                <Grid container>
                  <Grid item sm={12} md={7}>
                    <CustomerDetailsSection />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Page>
  );
};

export default Vehicle;
