import React from 'react';
import { Box, Divider, Grid } from '@mui/material';
import DwellTime from '../modules/SummaryDashboard/DwellTime';
import Deliveries from '../modules/SummaryDashboard/Deliveries';
import Greetings from '../modules/SummaryDashboard/Greetings';
import OffTrack from '../modules/SummaryDashboard/OffTrack';

const Dashboard = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Divider />
      <Grid container>
        <Grid item xs={12} sm={6} md={3} sx={{ px: 3, py: 1 }}>
          <Greetings />
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ marginRight: '-1px' }} />
        <Grid item xs={12} sm={6} md={3} sx={{ px: 3, py: 1 }}>
          <OffTrack />
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ marginRight: '-1px' }} />
        <Grid item xs={12} sm={6} md={3} sx={{ px: 3, py: 1 }}>
          <Deliveries />
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ marginRight: '-1px' }} />
        <Grid item xs={12} sm={6} md={3} sx={{ px: 3, py: 1 }}>
          <DwellTime />
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
};

export default Dashboard;
