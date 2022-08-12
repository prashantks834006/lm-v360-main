import React from 'react';
import { Box, FormGroup, FormControlLabel, Checkbox as MUICheckbox, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledCheckbox = styled(MUICheckbox)(() => ({
  '& .MuiFormControlLabel-label': {
    fontSize: 14,
  },
}));

const Checkbox: React.FC = () => {
  return (
    <Box>
      <FormGroup>
        <FormControlLabel
          control={<StyledCheckbox color="success" defaultChecked />}
          label={<Typography variant="body2">Collect DMV info</Typography>}
        />
        <FormControlLabel
          control={<StyledCheckbox color="success" />}
          label={<Typography variant="body2">Collect Delivery info</Typography>}
        />
        <FormControlLabel
          control={<StyledCheckbox color="success" />}
          label={<Typography variant="body2">Collect Registration info</Typography>}
        />
      </FormGroup>
    </Box>
  );
};

export default Checkbox;
