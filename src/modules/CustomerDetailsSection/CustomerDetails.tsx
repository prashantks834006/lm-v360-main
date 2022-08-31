import { Icon } from '@iconify/react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import Chip from '../../components/Chip/Chip';
import Label from '../../components/Label/Label';
import Link from '../../components/Link/Link';
import { PATHS } from '../../utils/constants';
import ActionsTabs from './ActionsTabs';

const CustomerDetails = () => {
  return (
    <Box
      p={2}
      borderRadius={2}
      bgcolor={(theme) => theme.palette.grey[50]}
      border={(theme) => `2px solid ${theme.palette.grey[100]}`}
    >
      <Stack direction="row" alignItems="flex-end" gap={1}>
        <Typography variant="h4" fontWeight={400} fontSize={28}>
          Stephanie Nelson
        </Typography>
        <Link
          to={PATHS.vehicles}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, mb: 0.5 }}
        >
          Reassign <Icon icon="akar-icons:chevron-down" />
        </Link>
        <Box flexGrow={1} />
        <Link to={PATHS.vahicle('123')} sx={{ mb: 0.5 }}>
          View details
        </Link>
      </Stack>
      <Typography fontSize={12} fontWeight={200} color={(theme) => theme.palette.grey[800]}>
        DJ8474938304562 (Grand Touring)
      </Typography>
      <Typography fontSize={11} color={(theme) => theme.palette.grey[800]}>
        415-672-0945 | stephanienelson@gmail.components
      </Typography>
      <Stack divider={<Divider orientation="vertical" flexItem />} direction="row" gap={2} mt={2}>
        <Label label="Delivery scheduled" title="--" />
        <Label label="Delivery readiness" type="progress" progress={33} />
        <Label
          label="Customer stage"
          title={
            <Stack direction="row" gap={1} alignItems="center">
              <Typography variant="body2" fontWeight={400} noWrap>
                Collect information
              </Typography>
              <Chip text="Off track" />
            </Stack>
          }
          progress={33}
        />
      </Stack>
      <ActionsTabs />
    </Box>
  );
};

export default CustomerDetails;
