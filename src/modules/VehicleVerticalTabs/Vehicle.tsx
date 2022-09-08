import { Box, Skeleton, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getVehicleConfigurationMetaData, getVehicleConfiguration } from '../../services/vehicles';
import Typography from '../../components/Typography/Typography';
import FieldList from './FieldList';

const Vehicle = () => {
  const location = useLocation();
  const temp = location.pathname.split('/');
  const lucidId = temp[temp.length - 1];
  const [metadata, setMetadata] = useState<any>();
  const [data, setData] = useState<any>();
  useEffect(() => {
    getVehicleConfigurationMetaData().then((response) => setMetadata(response.configurationDetails));
  }, []);
  useEffect(() => {
    getVehicleConfiguration(null, null, lucidId).then((response) => setData(response));
  }, [lucidId]);
  if (!metadata || !data) {
    return (
      <Box display="flex" flexDirection="column" gap={1}>
        <Skeleton animation="wave" height={30} width={250} />
        {Array(15)
          .fill(0)
          .map(() => (
            <Stack direction="row" display="flex" justifyContent="space-between">
              <Skeleton animation="wave" height={30} width={100} />
              <Skeleton animation="wave" height={30} width={150} />
            </Stack>
          ))}
      </Box>
    );
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
