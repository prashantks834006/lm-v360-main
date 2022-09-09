import { Box, Skeleton, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getVehicleConfigurationMetaData, getVehicleConfiguration } from '../../services/vehicles';
import Typography from '../../components/Typography/Typography';
import FieldList from './FieldList';
import TabLoader from './TabLoader';

const Vehicle = () => {
  const location = useLocation();
  const temp = location.pathname.split('/');
  const lucidId = temp[temp.length - 1];
  const [metadata, setMetadata] = useState<any>();
  const [data, setData] = useState<any>();
  useEffect(() => {
    getVehicleConfigurationMetaData().then((response) => setMetadata(response.rows));
  }, []);

  useEffect(() => {
    getVehicleConfiguration(null, null, lucidId).then((response) => setData(response));
  }, [lucidId]);

  if (!metadata || !data) {
    return <TabLoader />;
  }

  const vehicleFields = metadata.map((configDetail: any) => {
    return { field: configDetail.propertyName, value: data[configDetail.property] };
  });
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
