import React from 'react';
import { Box, colors, Grid, Paper, Typography } from '@mui/material';
import StepperVertical from '../components/Stepper/StepperVertical';
import VehicleVerticalTabs from '../modules/VehicleVerticalTabs';
import Page from '../components/Page/Page';
import InfoHeader from '../modules/InfoHeader';
import Stepper from '../components/Stepper/Stepper';
import ActionsTabs from '../modules/CustomerDetailsSection/ActionsTabs';

const Vehicle = () => {
  const steps = ['Reservation', 'Order', 'Production', 'Transit', 'Inspection', 'Delivery', 'Ownership'];

  const stepsVertical = ['En-route', 'In yard'];

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
                <Grid container mt={2} spacing={4}>
                  <Grid item sm={12} md={7} m={0}>
                    <ActionsTabs />
                  </Grid>
                  <Grid item md={5}>
                    <Typography variant="body2" fontWeight={700} fontSize={12} color={colors.grey[600]}>
                      ORDERED
                    </Typography>
                    <StepperVertical steps={stepsVertical} activeStep={1} />
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
