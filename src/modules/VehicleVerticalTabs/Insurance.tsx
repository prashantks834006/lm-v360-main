import { Box } from '@mui/material';
import React from 'react';
import Typography from '../../components/Typography/Typography';
import FieldList from './FieldList';
import { insurance } from './VehicleVerticalTabs.mock';

const Insurance = () => {
  return (
    <Box>
      <Typography size={12} weight={500} uppercase>
        Insurance
      </Typography>
      <FieldList fields={insurance} />
    </Box>
  );
};

export default Insurance;
