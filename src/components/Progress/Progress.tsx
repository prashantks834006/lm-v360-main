import { Box, colors } from '@mui/material';
import React from 'react';

const Progress: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <Box bgcolor={colors.grey[300]} borderRadius={50} width="100%" minWidth={64} height={12} overflow="hidden">
      <Box bgcolor={colors.green[700]} height="100%" width={`${progress}%`} borderRadius={50} />
    </Box>
  );
};

export default Progress;
