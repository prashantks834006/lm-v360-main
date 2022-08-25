import React from 'react';
import MuiButton, { ButtonProps } from '@mui/material/Button';

interface Props extends ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ children, ...other }) => {
  return (
    <MuiButton type="button" sx={{ textTransform: 'capitalize', ...other.sx }} {...other}>
      {children}
    </MuiButton>
  );
};

export default Button;
