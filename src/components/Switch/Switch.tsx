import * as React from 'react';
import { styled } from '@mui/material/styles';
import MUISwitch, { SwitchProps } from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material';

const CustomSwitch = styled(MUISwitch)(({ theme }) => ({
  width: 32,
  height: 16,
  padding: 0,
  margin: '0px 10px',
  display: 'flex',
  borderRadius: 10,
  backgroundColor: theme.palette.grey[50],
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 32,
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: '50%',
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 8,
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const CustomFormControlLabel = styled(FormControlLabel)(() => ({
  marginLeft: 0,

  '& .MuiFormControlLabel-label': {
    fontSize: 12,
    fontWeight: 500,
    marginLeft: 0,
  },
}));

interface CustomSwitchProps extends Omit<SwitchProps, 'onChange'> {
  label: string;
  labelPlacement?: 'top' | 'bottom' | 'end' | 'start';
  onChange(checked: boolean): void;
}

const Switch: React.FC<CustomSwitchProps> = ({ label, labelPlacement, value, onChange, ...other }) => {
  return (
    <CustomFormControlLabel
      value={value}
      onChange={(e, c) => onChange(c)}
      control={<CustomSwitch {...other} />}
      label={label}
      labelPlacement={labelPlacement}
    />
  );
};

export default Switch;
