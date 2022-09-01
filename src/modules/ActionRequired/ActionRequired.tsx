import React from 'react';
import { Box, Button, Checkbox, Divider, FormControlLabel, FormGroup, Grid, Stack, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import Accordian from '../../components/Accordian/Accordian';
import IAction from '../../types/action';
import Chip from '../../components/Chip/Chip';
import TextField from '../../components/TextField/TextField';
import Select from '../../components/Select';
import { taskOutcomes } from '../../mock/Actions';

const ActionRequired: React.FC<IAction> = ({ id, name, dueDate, tasks }) => {
  const header = (
    <Box gap={0.5}>
      <Typography variant="body1" fontWeight={400}>
        {name}
      </Typography>
      <Stack divider={<Divider orientation="vertical" flexItem />} direction="row" gap={2}>
        <Typography fontSize={10} fontWeight={300}>
          Assigned to Jereme Belle
        </Typography>
        <Typography fontSize={10} color={(theme) => theme.palette.error.light} fontWeight={300}>
          Due on {dueDate}
        </Typography>
      </Stack>
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
          <Grid container gap={1.375} alignItems="center">
            <Grid item>
              <Select title="Task outcome" options={taskOutcomes} />
            </Grid>
            <Grid item xs>
              <TextField placeholder="Enter comment" sx={{ fontSize: 12, height: 36 }} />
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                sx={{
                  textTransform: 'none',
                  height: 'fit-content',
                  fontSize: '12px',
                  padding: '10px',
                  lineHeight: 'inherit',
                }}
                disabled
              >
                Mark as Complete
              </Button>
            </Grid>
          </Grid>
        </Box>
      </FormGroup>
    </Accordian>
  );
};

export default ActionRequired;
