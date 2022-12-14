import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import DwellTimeChart from './DwellTimeChart';

const DwellTime = () => {
  const title = (
    <Stack direction="row" gap={1} alignItems="flex-end">
      <Typography variant="h5" sx={{ fontWeight: 500 }}>
        7 days
      </Typography>
      <Typography component="div" variant="body2" sx={{ fontSize: 10 }}>
        <Box component="span" sx={{ color: 'red', mr: 0.5 }}>
          <Icon icon="akar-icons:arrow-up" />4 days
        </Box>
        <span>more compared to last month</span>
      </Typography>
    </Stack>
  );

  return (
    <>
      <Typography sx={{ textTransform: 'uppercase', fontWeight: 600, fontSize: 10, py: 1.5, px: 2 }}>
        Current Dwell time for scheduling delivery
      </Typography>
      <DwellTimeChart
        title={title}
        chartData={[
          { label: 'April', weeks: 5 },
          { label: 'May', weeks: 7 },
          { label: 'June', weeks: 5 },
          { label: 'July', weeks: 12 },
          { label: 'Aug', weeks: 11 },
        ]}
      />
    </>
  );
};

export default DwellTime;
