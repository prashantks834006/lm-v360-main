import React from 'react';
import { Box, Stack } from '@mui/material';
import moment from 'moment';
import { PATHS } from '../../utils/constants';
import Link from '../../components/Link/Link';
import Chip from '../../components/Chip/Chip';
import Progress from '../../components/Progress/Progress';

export const LinkCell = ({ value }: any) => <Link to={PATHS.dashboard}> {value} </Link>;

export const TagCell = ({ value }: any) => {
  const color = value === 'Off Track' ? '#E04732 !important' : undefined;
  return (
    value && (
      <Box py={1}>
        <Chip text={value} color={color} borderColor={color} />
      </Box>
    )
  );
};

export const ColorCell = ({ value }: any) =>
  value && (
    <Stack direction="row" gap={1.25} alignItems="center">
      <Box
        sx={{
          background: `linear-gradient(140.32deg, ${value.color1} 45.43%, ${value.color2} 47.37%)`,
          boxShadow: 'inset 0px 1px 1px 1px rgba(0, 0, 0, 0.16)',
          borderRadius: '50%',
          width: '14px',
          height: '14px',
        }}
      >
        {' '}
      </Box>
      {value.label}
    </Stack>
  );

export const DateCell = ({ value }: any) => value && moment(value).format('MMM DD, YYYY');

export const ProgressCell = ({ value }: any) => <Progress progress={value} />;
