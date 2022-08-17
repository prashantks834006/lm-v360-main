import React from 'react';
import { Box, Card, Grid } from '@mui/material';
import VehicleVerticalTabs from '../../modules/VehicleVerticalTabs';
import Page from '../../components/Page/Page';
import InfoHeader from './InfoHeader';

const Vehicle = () => {
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
              <Card sx={{ height: '100%', width: '100%' }} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Page>
  );
};

export default Vehicle;
