import React from 'react';
import { Card } from '@mui/material';
import Tabs from '../../components/Tabs';
import tabItems from './tabItems';

const VehicleVerticalTabs = () => {
  return (
    <Card sx={{ p: 1 }}>
      <Tabs tabItems={tabItems} orientation="vertical" />
    </Card>
  );
};

export default VehicleVerticalTabs;
