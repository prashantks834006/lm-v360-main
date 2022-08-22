import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Stack } from '@mui/system';
import Tabs from '../../components/Tabs';
import Chip from '../../components/Chip/Chip';
import actions from '../../mock/Actions';
import ActionRequired from '../ActionRequired/ActionRequired';
import ActionCompleted from '../ActionCompleted/ActionCompleted';

const CustomerDetailsSection: React.FC = () => {
  const tabItems = [
    {
      label: 'Actions Required (2)',
      content: actions.map((action) => !action.isComplete && <ActionRequired {...action} />),
    },
    {
      label: 'Actions Completed (1)',
      content: actions.map((action) => action.isComplete && <ActionCompleted {...action} />),
    },
  ];

  return (
    <Box padding={2}>
      <Box display="flex" alignItems="center">
        <Box display="flex" flex="1" mb={1}>
          <Box marginRight={1}>
            <Typography variant="h1" fontWeight={500} fontSize={32} lineHeight={1}>
              Stephanie
            </Typography>
          </Box>
          <Typography color="blue" variant="caption" fontWeight={500} alignSelf="flex-end">
            Reassign
          </Typography>
          <Box color="blue" fontSize={14} alignSelf="flex-end">
            <KeyboardArrowDownIcon fontSize="inherit" />
          </Box>
        </Box>
        <Box>
          <Stack direction="row" spacing={1} divider={<Divider orientation="vertical" flexItem />}>
            <Typography variant="caption" color="blue">
              View Details
            </Typography>
            <CloseIcon />
          </Stack>
        </Box>
      </Box>
      <Box mb={1}>
        <Typography variant="body2" component="div" mb={1}>
          DJ8474938304562 (Grand Touring)
        </Typography>
        <Typography variant="caption" component="div">
          415-672-0945 | stephanienelson@gmail.com
        </Typography>
      </Box>
      <Stack direction="row" gap={2.5}>
        <Box>
          <Typography variant="caption" component="div">
            Delivery scheduled
          </Typography>
          <Typography variant="subtitle2" component="div">
            Sep. 10, 2022, 4:00PM
          </Typography>
        </Box>
        <Divider orientation="vertical" />
        <Box>
          <Typography variant="caption" component="div">
            Delivery Readiness
          </Typography>
          <Typography variant="subtitle2" component="div">
            Sep. 10, 2022, 4:00PM
          </Typography>
        </Box>
        <Divider orientation="vertical" />
        <Box>
          <Typography variant="caption" component="div">
            Customer Status
          </Typography>
          <Stack direction="row" gap={1}>
            <Typography variant="subtitle2" component="div">
              Collect information
            </Typography>
            <Chip text="Off track" fontSize="12px !important" />
          </Stack>
        </Box>
      </Stack>
      <Tabs tabItems={tabItems} />
    </Box>
  );
};

export default CustomerDetailsSection;
