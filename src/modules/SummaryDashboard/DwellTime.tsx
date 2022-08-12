import React from 'react';
import { Typography } from '@mui/material';
import DwellTimeChart from './DwellTimeChart';

const DwellTime = () => {
  return (
    <>
      <Typography sx={{ textTransform: 'uppercase', fontWeight: 600, fontSize: 10 }}>
        Current Dwell time for scheduling delivery
      </Typography>
      <DwellTimeChart
        title="38"
        chartData={[
          { label: 'April', weeks: 8 },
          { label: 'May', weeks: 7 },
          { label: 'June', weeks: 12 },
          { label: 'July', weeks: 15 },
          { label: 'Aug', weeks: 14 },
        ]}
      />
    </>
  );
};

export default DwellTime;
