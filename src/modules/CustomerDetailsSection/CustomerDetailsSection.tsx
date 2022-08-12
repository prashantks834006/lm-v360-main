import { Alert, Box, Divider, Paper, Typography } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Stack } from '@mui/system';
import Checkbox from '../../components/Checkbox';
import Tabs from '../../components/Tabs';

const CustomerDetailsSection: React.FC = () => {
  return (
    <Box padding={2}>
      <Box display="flex" alignItems="center">
        <Box display="flex" flex="1" mb={1}>
          <Box marginRight={1}>
            <Typography variant="h6" fontWeight="bold" fontSize={32} lineHeight={1}>
              Stephanie
            </Typography>
          </Box>
          <Typography color="blue" variant="caption" alignSelf="flex-end">
            Reassign
          </Typography>
        </Box>
        <Box>
          <Stack direction="row" spacing={1} divider={<Divider orientation="vertical" flexItem />}>
            <Typography variant="caption" color="blue">
              Full Specification
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
      <Box display="flex">
        <Box mr={1}>
          <Typography variant="caption">Customer Stage</Typography>
          <Alert sx={{ padding: 0 }} icon={false}>
            Payment Collected
          </Alert>
        </Box>
        <Box mr={1}>
          <Typography variant="caption">Customer Stage</Typography>
          <Alert sx={{ padding: 0 }} severity="error" icon={false}>
            Off track
          </Alert>
        </Box>
      </Box>
      <Tabs />
      <Paper elevation={0}>
        <Box p={2}>
          <Box mb={1}>
            <Typography variant="caption" color="red" fontWeight="600">
              Due on July 25, 2022
            </Typography>
          </Box>
          <Typography variant="body1" fontWeight="600">
            Collect Information
          </Typography>
          <Box>
            <Checkbox />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default CustomerDetailsSection;
