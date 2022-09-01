import { Typography } from '@mui/material';
import React from 'react';
import DeliveriesChart from './DeliveriesChart';

const Deliveries = () => {
  return (
    <>
      <Typography sx={{ textTransform: 'uppercase', fontWeight: 600, fontSize: 10, px: 2, pt: 1.5 }}>
        Delivery scheduled for next 7 days
      </Typography>
      <DeliveriesChart
        title="38"
        chartData={[
          { label: 'Today', homeDelivery: 4, pickup: 3 },
          { label: '8/6', homeDelivery: 7, pickup: 6 },
          { label: '8/7', homeDelivery: 10, pickup: 12 },
          { label: '8/8', homeDelivery: 12, pickup: 14 },
          { label: '8/9', homeDelivery: 10, pickup: 10 },
          { label: '8/10', homeDelivery: 8, pickup: 3 },
          { label: '8/11', homeDelivery: 5, pickup: 2 },
        ]}
      />
    </>
  );
};

export default Deliveries;
