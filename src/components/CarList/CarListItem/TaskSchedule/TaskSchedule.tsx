import React from 'react';
import { Stack, Typography } from '@mui/material';

interface IProps {
  schedule?: string;
}

const TaskSchedule: React.FC<IProps> = ({ schedule }) => {
  return (
    <Stack direction="column" gap={0.5} width="28%">
      {schedule && (
        <>
          <Typography variant="subtitle2">Delivery Scheduled</Typography>
          <Typography variant="caption">{schedule}</Typography>
        </>
      )}
    </Stack>
  );
};

export default TaskSchedule;
