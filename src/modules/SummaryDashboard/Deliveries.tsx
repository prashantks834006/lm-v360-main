import { Typography } from '@mui/material';
import React from 'react';
import NextWeekDeliveries from './NextWeekDeliveriesChart';

const Deliveries = () => {
  return (
    <>
      <Typography sx={{ textTransform: 'uppercase', fontWeight: 600, fontSize: 10 }}>
        Delivery scheduled for next 7 days
      </Typography>
      <NextWeekDeliveries
        title="38"
        chartData={[
          { label: 'Today', homeDelivery: 31, pickup: 40 },
          { label: '8/6', homeDelivery: 11, pickup: 22 },
          { label: '8/7', homeDelivery: 21, pickup: 4 },
          { label: '8/8', homeDelivery: 35, pickup: 27 },
          { label: '8/9', homeDelivery: 1, pickup: 41 },
          { label: '8/10', homeDelivery: 8, pickup: 52 },
        ]}
      />
    </>
  );
};

export default Deliveries;
