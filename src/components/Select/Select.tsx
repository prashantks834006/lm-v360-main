import React, { useState } from 'react';
import { Select as MUISelect, FormControl, MenuItem, styled } from '@mui/material';
import TextField from '../TextField/TextField';

const StyledSelect = styled(MUISelect)(() => ({
  fontSize: '12px',
  cursor: 'pointer',
  userSelect: 'none',
  padding: '6px 10px',
  color: '#787878',
  ' .MuiSelect-select.MuiSelect-standard.MuiInputBase-input': {
    padding: '0px',
  },
  ' svg': {
    position: 'static',
  },
}));

interface IProps {
  title: string;
  selectedOption?: string;
  setSelectedOption?: (selectedOption: string) => void;
  options: { value: string; label: string }[];
  width?: string;
}

const Select: React.FC<IProps> = ({ title, selectedOption, setSelectedOption, options, width }) => {
  const [selectedValue, setSelectedValue] = useState('none');
  return (
    <FormControl sx={{ width: width ?? '100%' }} variant="standard">
      <StyledSelect
        input={<TextField />}
        defaultValue="none"
        value={setSelectedOption ? selectedOption ?? 'none' : selectedValue}
        onChange={(event) =>
          setSelectedOption
            ? setSelectedOption(String(event.target.value))
            : setSelectedValue(String(event.target.value))
        }
      >
        <MenuItem value="none" sx={{ display: 'none' }}>
          {title}
        </MenuItem>
        {options.map(({ value, label }) => (
          <MenuItem value={value}>{label}</MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default Select;
