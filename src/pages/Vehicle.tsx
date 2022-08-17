import React from 'react';

import { Box, Grid } from '@mui/material';
import Page from '../components/Page/Page';
import VehicleVerticalTabs from '../modules/VehicleVerticalTabs';

const Vehicle = () => {
  return (
    <Page sx={{ bgcolor: (theme) => theme.palette.grey[300] }}>
      <Box>Header component</Box>
      <Box sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item sm={12} md={6} lg={4}>
            <VehicleVerticalTabs />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            Vehicle details
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};

export default Vehicle;
