import { Box, Grid, Skeleton, Stack } from '@mui/material';
import React from 'react';

const QuickGlanceLoader = () => {
  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Skeleton animation="wave" height={170} width={300} sx={{ transform: 'none' }} />
      {Array(3)
        .fill(0)
        .map(() => (
          <Stack direction="row">
            <Box width={200}>
              <Skeleton animation="wave" height={25} width={100} />
              <Skeleton animation="wave" height={25} width={100} />
            </Box>
            <Box>
              <Skeleton animation="wave" height={25} width={100} />
              <Skeleton animation="wave" height={25} width={100} />
            </Box>
          </Stack>
        ))}
      <Box>
        <Skeleton animation="wave" height={25} width={100} />
        <Skeleton animation="wave" height={25} width={100} />
      </Box>
      <Box display="flex" flexDirection="column" gap={0.5}>
        <Stack direction="row" display="flex" justifyContent="space-between" alignItems="center">
          <Skeleton animation="wave" height={30} width={50} />
          <Skeleton animation="wave" height={20} width={100} />
        </Stack>
        {Array(5)
          .fill(0)
          .map(() => (
            <Stack direction="row" gap={1}>
              <Skeleton animation="wave" height={50} width={50} variant="rounded" sx={{ borderRadius: '50%' }} />
              <Box>
                <Skeleton animation="wave" height={30} width={100} />
                <Skeleton animation="wave" height={15} width={150} />
              </Box>
            </Stack>
          ))}
      </Box>
      <Box display="flex" justifyContent="center">
        <Skeleton animation="wave" height={30} width={150} />
      </Box>
      <Box display="flex" justifyContent="center" gap={5}>
        <Skeleton animation="wave" height={15} width={60} />
        <Skeleton animation="wave" height={15} width={30} />
        <Skeleton animation="wave" height={15} width={80} />
      </Box>
    </Box>
  );
};

export default QuickGlanceLoader;
