import { Box, Skeleton, Stack } from '@mui/material';
import React from 'react';

const VehicleListLoader = () => {
  return (
    <Stack m={3} gap={3}>
      <Stack direction="row" gap={2}>
        <Skeleton animation="wave" width={300} height={40} />
        <Box flexGrow={1} />
        <Skeleton animation="wave" width={100} height={40} />
        <Skeleton animation="wave" width={200} height={40} />
        <Skeleton animation="wave" width={100} height={40} />
        <Skeleton animation="wave" width={100} height={40} />
      </Stack>
      <Skeleton animation="wave" height={20} />
      <Skeleton animation="wave" height={20} />
      <Skeleton animation="wave" height={20} />
      <Skeleton animation="wave" height={20} />
      <Skeleton animation="wave" height={20} />
      <Skeleton animation="wave" height={20} />
      <Skeleton animation="wave" height={20} />
      <Skeleton animation="wave" height={20} />
      <Skeleton animation="wave" height={20} />
      <Skeleton animation="wave" height={20} />
      <Stack direction="row" gap={2}>
        <Box flexGrow={1} />
        <Skeleton animation="wave" width={200} height={40} />
        <Skeleton animation="wave" width={100} height={40} />
        <Skeleton animation="wave" width={100} height={40} />
      </Stack>
    </Stack>
  );
};

export default VehicleListLoader;
