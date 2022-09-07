import { Grid, Skeleton, Stack } from '@mui/material';
import React from 'react';

const QuickGlanceLoader = () => {
  return (
    <Stack spacing={5}>
      <Skeleton variant="rectangular" animation="wave" height={200} />
      <Stack gap={2}>
        <Stack direction="row" gap={6}>
          <Skeleton variant="rectangular" animation="wave" height={20} width={100} />
          <Skeleton variant="rectangular" animation="wave" height={20} width={100} />
        </Stack>
        <Stack direction="row" gap={6}>
          <Skeleton variant="rectangular" animation="wave" height={20} width={100} />
          <Skeleton variant="rectangular" animation="wave" height={20} width={100} />
        </Stack>
        <Stack direction="row" gap={6}>
          <Skeleton variant="rectangular" animation="wave" height={20} width={100} />
          <Skeleton variant="rectangular" animation="wave" height={20} width={100} />
        </Stack>
      </Stack>

      <Stack spacing={2}>
        <Skeleton variant="rectangular" animation="wave" height={20} />
        <Skeleton variant="rectangular" animation="wave" height={20} />
        <Skeleton variant="rectangular" animation="wave" height={20} />
      </Stack>
    </Stack>
  );
};

export default QuickGlanceLoader;
