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
          { label: 'Reservation', offTrack: 1, onTrack: 40 },
          { label: 'Ordering', offTrack: 17, onTrack: 9 },
          { label: 'Production', offTrack: 22, onTrack: 4 },
          { label: 'Transit', offTrack: 5, onTrack: 27 },
          { label: 'Inspection', offTrack: 37, onTrack: 41 },
          { label: 'Delivery', offTrack: 3, onTrack: 52 },
        ]}
      />
    </>
  );
};

export default OffTrack;
