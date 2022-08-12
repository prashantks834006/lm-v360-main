import React from 'react';
import { Typography } from '@mui/material';
import NextWeekDeliveries from './DwellTimeChart';

const DwellTime = () => {
  return (
    <>
      <Typography sx={{ textTransform: 'uppercase', fontWeight: 600, fontSize: 10 }}>
        Current Dwell time for scheduling delivery
      </Typography>
      <NextWeekDeliveries
        title="38"
        chartData={[
          { label: 'Today', offTrack: 31, onTrack: 40 },
          { label: '8/6', offTrack: 31, onTrack: 0 },
          { label: '8/7', offTrack: 31, onTrack: 4 },
          { label: '8/8', offTrack: 31, onTrack: 27 },
          { label: '8/9', offTrack: 31, onTrack: 41 },
          { label: '8/10', offTrack: 31, onTrack: 52 },
        ]}
      />
    </>
  );
};

export default DwellTime;
