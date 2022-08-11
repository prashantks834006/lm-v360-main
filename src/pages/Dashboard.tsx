import { Box, Divider, Grid } from '@mui/material';
import React from 'react';
import OffTrackChart from '../modules/SummaryDashboard/OffTrackChart';

const Dashboard = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Divider />
      <Grid container>
        <Grid item xs={12} sm={6} md={3} sx={{ p: 3 }}>
          <Box>Good morning Johnson</Box>
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ marginRight: '-1px' }} />
        <Grid item xs={12} sm={6} md={3} sx={{ p: 3 }}>
          <OffTrackChart
            title="54 customers"
            chartData={[
              { label: 'Reservation', offTrack: 31, onTrack: 40 },
              { label: 'Ordering', offTrack: 31, onTrack: 0 },
              { label: 'Production', offTrack: 31, onTrack: 4 },
              { label: 'Transit', offTrack: 31, onTrack: 27 },
              { label: 'Inspection', offTrack: 31, onTrack: 41 },
              { label: 'Delivery', offTrack: 31, onTrack: 52 },
            ]}
          />
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ marginRight: '-1px' }} />
        <Grid item xs={12} sm={6} md={3} sx={{ p: 3 }}>
          <OffTrackChart
            title="54 customers"
            chartData={[
              { label: 'Reservation', offTrack: 31, onTrack: 40 },
              { label: 'Ordering', offTrack: 31, onTrack: 0 },
              { label: 'Production', offTrack: 31, onTrack: 4 },
              { label: 'Transit', offTrack: 31, onTrack: 27 },
              { label: 'Inspection', offTrack: 31, onTrack: 41 },
              { label: 'Delivery', offTrack: 31, onTrack: 52 },
            ]}
          />
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ marginRight: '-1px' }} />
        <Grid item xs={12} sm={6} md={3} sx={{ p: 3 }}>
          Good morning Johnson
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
};

export default Dashboard;
