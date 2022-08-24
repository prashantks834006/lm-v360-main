import React, { ReactNode } from 'react';
import { colors, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Progress from '../Progress/Progress';

interface IProps {
  label: string;
  title?: ReactNode;
  type?: 'text' | 'progress';
  progress?: number;
}

const Label: React.FC<IProps> = ({ label, title, type = 'text', progress = 0 }) => {
  return (
    <Box>
      <Typography variant="caption" color={colors.grey[500]} noWrap>
        {label}
      </Typography>
      {type === 'text' &&
        (typeof title === 'string' ? (
          <Typography variant="body2" fontWeight={500}>
            {title}
          </Typography>
        ) : (
          title
        ))}
      {type === 'progress' && <Progress progress={progress} />}
    </Box>
  );
};

export default Label;
