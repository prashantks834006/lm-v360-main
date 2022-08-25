import { Box } from '@mui/material';
import React from 'react';
import Typography from '../../components/Typography/Typography';
import FieldList from './FieldList';
import { payment, purchaseAgreement } from './VehicleVerticalTabs.mock';

const Payment = () => {
  return (
    <Box>
      <Typography size={12} weight={500} uppercase>
        Payment details
      </Typography>
      <FieldList fields={payment} />
      <Typography size={12} weight={500} uppercase>
        Purchase agreement
      </Typography>
      <FieldList fields={purchaseAgreement} />
    </Box>
  );
};

export default Payment;
