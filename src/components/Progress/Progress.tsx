import { Box, colors, Stack, Typography } from '@mui/material';
import React from 'react';

const Progress: React.FC<{ progress: number }> = ({ progress }) => {
  return progress !== null && progress !== undefined ? (
    <Stack direction="row" alignItems="center" justifyContent="center" gap={1}>
      <Box
        bgcolor={colors.grey[300]}
        borderRadius={50}
        width="100%"
        minWidth={64}
        height={12}
        overflow="hidden"
        flexGrow={1}
      >
        <Box bgcolor={colors.green[700]} height="100%" width={`${progress}%`} borderRadius={50} />
      </Box>
      <Typography fontSize={12}>{progress}%</Typography>
    </Stack>
  ) : (
    <span />
  );
};

export default Progress;
