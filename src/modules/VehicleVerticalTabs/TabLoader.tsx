import { Box, Skeleton, Stack } from '@mui/material';
import React from 'react';

const TabLoader = () => {
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
};

export default TabLoader;
