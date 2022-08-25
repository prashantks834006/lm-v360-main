import React, { useState } from 'react';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import { Icon } from '@iconify/react';
import { PATHS } from '../../utils/constants';
import DwellTime from './DwellTime';
import Deliveries from './Deliveries';
import Greetings from './Greetings';
import DeliveryPipeline from './DeliveryPipeline';
import Switch from '../../components/Switch/Switch';
import Link from '../../components/Link/Link';

const SummaryDashboard = () => {
  const [isSummaryHidden, setIsSummaryHidden] = useState(false);

  const handleSummaryToggle = (checked: boolean) => setIsSummaryHidden(checked);

  return (
    <Box px={2}>
      <Collapse in={!isSummaryHidden}>
        <Divider />
        <Grid container>
          <Grid item xs={12} sm={6} md={3} sx={{ px: 3, py: 1 }}>
            <Greetings />
          </Grid>
          <Divider orientation="vertical" flexItem sx={{ marginRight: '-1px' }} />
          <Grid item xs={12} sm={6} md={3} sx={{ px: 3, py: 1 }}>
            <DeliveryPipeline />
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
      </Collapse>
      <Stack justifyContent="space-between" direction="row" alignItems="center">
        <Stack sx={{ p: isSummaryHidden ? 0 : 1 }} direction="row" gap={2}>
          {isSummaryHidden && (
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Good Morning, John!
            </Typography>
          )}
          <Switch
            onChange={handleSummaryToggle}
            label={isSummaryHidden ? 'Show Summary' : 'Hide Summary'}
            labelPlacement="start"
          />
        </Stack>
        <Box>
          <Stack direction="row" alignItems="center" justifyContent="center" gap={1}>
            <Link to={PATHS.vehicles}>All Vehicles</Link>
            <Divider orientation="vertical" flexItem />
            <Typography sx={{ fontSize: 12 }}>Search with saved filters:</Typography>
            <Link to={PATHS.vehicles}>Upcoming Deliveries</Link>
            <Divider orientation="vertical" flexItem />
            <Link to={PATHS.vehicles}>PDI-Costa Misa</Link>
            <Divider orientation="vertical" flexItem />
            <Link to={PATHS.vehicles}>
              <Stack
                direction="row"
                alignItems="center"
                gap={0.5}
                sx={{ color: (theme) => theme.palette.primary.main, fontSize: 12 }}
              >
                All saved filters
                <Icon icon="akar-icons:chevron-down" />
              </Stack>
            </Link>
          </Stack>
        </Box>
      </Stack>
      <Divider />
    </Box>
  );
};

export default SummaryDashboard;
