import { Typography } from '@mui/material';
import React from 'react';
import DeliveryPipelineChart from './DeliveryPipelineChart';

const OffTrack = () => {
  return (
    <>
      <Typography fontSize={10} fontWeight={600} textTransform="uppercase">
        Delivery pipeline
      </Typography>
      <DeliveryPipelineChart />
    </>
  );
};

export default OffTrack;
