import { Typography } from '@mui/material';
import React from 'react';
import DeliveryPipelineChart from './OffTrackChart';

const OffTrack = () => {
  return (
    <>
      <Typography fontSize={10} fontWeight={600} textTransform="uppercase">
        Delivery pipeline
      </Typography>
      <DeliveryPipelineChart
        title="54 customers"
        chartData={[
          { label: 'Reservation', offTrack: 8, onTrack: 50 },
          { label: 'Ordering', offTrack: 20, onTrack: 49 },
          { label: 'Production', offTrack: 18, onTrack: 60 },
          { label: 'Transit', offTrack: 4, onTrack: 50 },
          { label: 'Inspection', offTrack: 2, onTrack: 30 },
          { label: 'Delivery', offTrack: 3, onTrack: 49 },
        ]}
      />
    </>
  );
};

export default OffTrack;
