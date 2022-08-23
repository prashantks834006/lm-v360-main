import { Typography } from '@mui/material';
import React from 'react';
import DeliveryPipelineChart from './OffTrackChart';

const OffTrack = () => {
  return (
    <>
      <Typography fontSize={10} fontWeight={600} textTransform="uppercase">
        Off Track
      </Typography>
      <DeliveryPipelineChart
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
    </>
  );
};

export default OffTrack;
