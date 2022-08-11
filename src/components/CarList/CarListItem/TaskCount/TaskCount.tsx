import React from 'react';
import { Stack, Typography } from '@mui/material';
import { ReactComponent as SelectIcon } from './SelectIcon.svg';

interface IProps {
  count: number;
  scheduled?: boolean;
}

const TaskCount: React.FC<IProps> = ({ count, scheduled }) => {
  return (
    <Stack direction="row" gap={0.5} alignItems="center" width="16%">
      <Typography variant="caption" fontWeight={500} color={scheduled ? 'red' : undefined}>
        {count} Task(s)
      </Typography>
      <SelectIcon />
    </Stack>
  );
};

export default TaskCount;
