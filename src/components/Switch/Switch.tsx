import * as React from 'react';
import { styled } from '@mui/material/styles';
import MUISwitch, { SwitchProps } from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material';

const AntSwitch = styled(MUISwitch)(({ theme }) => ({
  width: 35,
  height: 20,
  padding: 0,
  margin: '0px 10px',
  display: 'flex',
  borderRadius: 10,
  backgroundColor: theme.palette.primary.main,
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 35,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(20px)',
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
    width: 16,
    height: 16,
    borderRadius: '50%',
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

interface CustomSwitchProps extends Omit<SwitchProps, 'onChange'> {
  label: string;
  labelPlacement?: 'top' | 'bottom' | 'end' | 'start';
  onChange: (checked: boolean) => void;
}

const Switch: React.FC<CustomSwitchProps> = ({ label, labelPlacement, value, onChange, ...other }) => {
  return (
    <FormControlLabel
      value={value}
      onChange={(e, c) => onChange(c)}
      control={<AntSwitch {...other} />}
      label={label}
      labelPlacement={labelPlacement}
    />
  );
};

export default Switch;
