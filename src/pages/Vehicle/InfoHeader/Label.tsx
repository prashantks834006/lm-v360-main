import React from 'react';
import { colors, Typography } from '@mui/material';
import Box from '@mui/material/Box';

interface IProps {
  label: string;
  title?: string;
  type?: 'text' | 'progress';
  progress?: number;
}

const Progress: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box bgcolor={colors.grey[300]} borderRadius={50} width="100%" minWidth={64} height={12} overflow="hidden" mr={1}>
        <Box bgcolor={colors.green[700]} height="100%" width={`${progress}%`} />
      </Box>
      <Typography variant="caption">{progress}%</Typography>
    </Box>
  );
};

const Label: React.FC<IProps> = ({ label, title, type = 'text', progress = 0 }) => {
  return (
    <Box>
      <Typography variant="caption" color={colors.grey[500]}>
        {label}
      </Typography>
      {type === 'text' && (
        <Typography variant="body2" fontWeight={600}>
          {title}
        </Typography>
      )}
      {type === 'progress' && <Progress progress={progress} />}
    </Box>
  );
};

export default Label;
