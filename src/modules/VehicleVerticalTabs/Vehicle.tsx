import { Box } from '@mui/material';
import React from 'react';
import Typography from '../../components/Typography/Typography';
import FieldList from './FieldList';
import { vehicleFields } from './VehicleVerticalTabs.mock';

const Vehicle = () => {
  return (
    <Box width="100%">
      <Typography size={12} weight={500} uppercase>
        Vehicle Details & Configuration
      </Typography>
      <FieldList fields={vehicleFields} />
    </Box>
  );
};

export default Vehicle;
