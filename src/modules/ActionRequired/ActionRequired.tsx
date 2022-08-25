import React from 'react';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Stack, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import Accordian from '../../components/Accordian/Accordian';
import IAction from '../../types/action';
import Chip from '../../components/Chip/Chip';
import TextField from '../../components/TextField/TextField';

const ActionRequired: React.FC<IAction> = ({ id, name, dueDate, tasks }) => {
  const header = (
    <Box gap={0.5}>
      <Typography variant="body1" fontWeight="500">
        {name}
      </Typography>
      <Typography variant="caption" color="red" fontWeight="500">
        Due on {dueDate}
      </Typography>
    </Box>
  );
  const taskList = tasks.map((task) => (
    <Box key={task.id} display="flex" justifyContent="space-between">
      <FormControlLabel
        control={<Checkbox sx={{ padding: '0px' }} />}
        label={
          <Stack direction="row" gap={1}>
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
    <Accordian key={id} header={header} styleVariant="secondary">
      <FormGroup>
        <Box gap={1.375} display="flex" flexDirection="column">
          {taskList}
          <Box gap={1.375} display="flex">
            <TextField placeHolder="Task outcome" />
            <TextField placeHolder="Enter comment" />
            <Button variant="outlined" sx={{ textTransform: 'none', color: '#CFCFCF', border: '1px solid #E7E7E4' }}>
              Mark as Complete
            </Button>
          </Box>
        </Box>
      </FormGroup>
    </Accordian>
  );
};

export default ActionRequired;
