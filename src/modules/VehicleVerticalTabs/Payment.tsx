import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import request from '../../services/HttpService';
import Typography from '../../components/Typography/Typography';
import FieldList, { Field } from './FieldList';
import { purchaseAgreement } from './VehicleVerticalTabs.mock';
import TabLoader from './TabLoader';

const Payment = () => {
  const { lucidId } = useParams();
  const [data, setData] = useState<any>({});

  useEffect(() => {
    request
      .post('v1/payments', {
        lucidId,
      })
      .then((response) => {
        setData(response.data.data[0]);
      });
  }, [lucidId]);

  const payment: Field[] = [
    {
      field: 'Payment Method',
      value: data.deliveryDayPaymentMethod,
    },
    {
      field: 'Payment Date',
      value: moment(data.paymentDate).format('MMM DD, YYYY'),
    },
    {
      field: 'Remaining Amount',
      value: `$${data.deliveryDayAmount}`,
    },
    {
      field: 'Delivery day payment method',
      value: data.deliveryDayPaymentMethod,
    },
    {
      field: 'Delivery day amount',
      value: data.remainingAmount,
    },
    {
      field: 'Lucid financing amount',
      value: data.lucidFinancingAmount,
    },
    {
      field: 'other financing amount',
      value: data.otherFinancingAmount,
    },
    {
      field: 'Lien holder name',
      value: data.lienHolderAddress,
    },
    {
      field: 'Lien holder address',
      value: data.lienHolderAddress,
    },
    {
      field: 'Payment status',
      value: '-',
    },
  ];

  if (Object.keys(data).length === 0) {
    return <TabLoader />;
  }

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
