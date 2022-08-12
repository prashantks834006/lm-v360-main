import React, { useState } from 'react';
import { Box, Divider, Grid, Stack } from '@mui/material';
import DwellTime from './DwellTime';
import Deliveries from './Deliveries';
import Greetings from './Greetings';
import OffTrack from './OffTrack';
import Switch from '../../components/Switch/Switch';

const SummaryDashboard = () => {
  const [isSummaryHidden, setIsSummaryHidden] = useState(false);

  const handleSummaryToggle = (checked: boolean) => setIsSummaryHidden(checked);

  return (
    <Box>
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
      <Stack>
        <Box sx={{ p: 2 }}>
          <Switch onChange={handleSummaryToggle} label={isSummaryHidden ? 'Show Summary' : 'Hide Summary'} />
        </Box>
      </Stack>
    </Box>
  );
};

export default SummaryDashboard;
