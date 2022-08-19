import React from 'react';
import { Box } from '@mui/material';
import Typography from '../../components/Typography/Typography';
import FieldList from './FieldList';
import { registration, licencePlate } from './VehicleVerticalTabs.mock';

const Registration = () => {
  return (
    <Box>
      <Typography size={12} weight={500} uppercase>
        Registration details
      </Typography>
      <FieldList fields={registration} />
      <Typography size={12} weight={500} uppercase>
        Purchase agreement
      </Typography>
      <FieldList fields={licencePlate} />
    </Box>
  );
};

export default Registration;
