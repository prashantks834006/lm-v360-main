import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { ReactComponent as ProgressBar } from './ProgessBar.svg';

interface IProps {
  taskName: string;
  taskStatus: string;
  scheduled?: boolean;
}

const TaskProgress: React.FC<IProps> = ({ taskName, taskStatus, scheduled }) => {
  const track = scheduled ? 'On' : 'Off';
  return (
    <Stack direction="column" width="28%">
      <Stack direction="row" gap={0.5}>
        <Typography variant="subtitle2">{taskName}</Typography>
        <ProgressBar />
      </Stack>
      <Stack direction="row" gap={0.5} alignItems="center">
        <Typography variant="caption">{taskStatus}</Typography>
        <Box sx={{ border: 1, borderColor: '#717171', borderRadius: '2px', padding: '0px 8px' }}>
          <Typography variant="caption" fontWeight={500} lineHeight="130%">
            {track} track
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default TaskProgress;
