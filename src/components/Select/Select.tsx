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
  title?: string;
  selectedOption?: string;
  setSelectedOption?: (selectedOption: string) => void;
  options: { value: string; label: string }[];
  width?: string;
  height?: string;
}

const TitledSelect: React.FC<IProps> = ({ title, selectedOption, setSelectedOption, options, width, height }) => {
  const [selectedValue, setSelectedValue] = useState('none');
  return (
    <FormControl sx={{ width: width ?? '100%' }} variant="standard">
      <StyledSelect
        input={<TextField height={height} />}
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
          <MenuItem value={value} key={value}>
            {label}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

const Select: React.FC<IProps> = (props) => {
  const { title, options, width, height } = props;
  if (title) return <TitledSelect {...props} />;
  return (
    <FormControl sx={{ width: width ?? '100%' }} variant="standard">
      <StyledSelect input={<TextField height={height} />} defaultValue={options[0]?.value}>
        {options.map(({ value, label }) => (
          <MenuItem value={value} key={value}>
            {label}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default Select;
