import React from 'react';
import { Select as MUISelect, FormControl, MenuItem } from '@mui/material';

interface IProps {
  options: { value: string; label: string }[];
}

const Select: React.FC<IProps> = ({ options }) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <MUISelect labelId="demo-select-small" id="demo-select-small">
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map(({ value, label }) => (
          <MenuItem value={value}>{label}</MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
};

export default Select;
