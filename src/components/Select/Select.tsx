import React from 'react';
import { Select as MUISelect, FormControl, MenuItem, styled } from '@mui/material';
import TextField from '../TextField/TextField';

const StyledSelect = styled(MUISelect)(() => ({
  // '& .MuiFormControlLabel-label': {
  //   fontSize: 14,
  // },
}));

interface IProps {
  placeHolder: string;
  options: { value: string; label: string }[];
}

const Select: React.FC<IProps> = ({ placeHolder, options }) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <StyledSelect labelId="demo-select-small" id="demo-select-small" input={<TextField placeHolder={placeHolder} />}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map(({ value, label }) => (
          <MenuItem value={value}>{label}</MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default Select;
