import React from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup, Stack, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import IAction from '../../types/action';
import Chip from '../../components/Chip/Chip';

const ActionCompleted: React.FC<IAction> = ({ id, name, dueDate, tasks, taskOutcome, comment }) => {
  const taskList = tasks.map((task) => (
    <Box key={id} display="flex" justifyContent="space-between">
      <FormControlLabel
        control={<Checkbox disabled checked sx={{ padding: '0px' }} />}
        label={
          <Stack direction="row" gap={1.125} color="black">
            <Typography variant="body2">{task.name}</Typography>
            {task.canAutoComplete && <Chip text="Auto Complete" />}
          </Stack>
        }
        sx={{ margin: '0px', gap: '9px' }}
      />
      <LaunchIcon color="primary" fontSize="inherit" />
    </Box>
  ));
  return (
    <Box sx={{ border: '1px solid #E3E3E3', borderRadius: '4px', backgroundColor: '#fff' }}>
      <Box padding={1.5} display="flex" justifyContent="space-between">
        <Box gap={0.5}>
          <Typography variant="body1" fontWeight="500">
            {name}
          </Typography>
          <Typography variant="caption" color="green" fontWeight="500">
            Completed on {dueDate}
          </Typography>
        </Box>
        <Typography variant="caption" color="blue" fontWeight="500">
          Mark as Undone
        </Typography>
      </Box>
      <Box gap={2.625}>
        <FormGroup>
          <Box pt={1.375} px={1.625} pb={1.75} gap={1.375} display="flex" flexDirection="column">
            {taskList}
          </Box>
        </FormGroup>
        <Box px={1.625} pb={1.75}>
          <Stack direction="row" py={1.125} px={3.125} gap={7} bgcolor="#F6F6F6" borderRadius={1}>
            <Stack direction="column">
              <Typography variant="caption" fontWeight="500">
                Task Outcome
              </Typography>
              <Typography variant="caption">{taskOutcome}</Typography>
            </Stack>
            <Stack direction="column">
              <Typography variant="caption" fontWeight="500">
                Comment
              </Typography>
              <Typography variant="caption">{comment}</Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ActionCompleted;
