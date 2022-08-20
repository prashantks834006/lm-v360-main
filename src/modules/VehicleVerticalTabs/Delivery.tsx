import { Box } from '@mui/material';
import React from 'react';
import Typography from '../../components/Typography/Typography';
import FieldList from './FieldList';
import { customer, profile } from './VehicleVerticalTabs.mock';

const Delivery = () => {
  return (
    <Box>
      <Typography size={12} weight={500} uppercase>
        Delivery details
      </Typography>
      <FieldList fields={customer} />
      <Typography size={12} weight={500} uppercase>
        Profile
      </Typography>
      <FieldList fields={profile} />
    </Box>
  );
};

export default Delivery;
