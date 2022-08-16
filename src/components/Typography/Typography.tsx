import React, { FC } from 'react';
import MuiTypography, { TypographyProps } from '@mui/material/Typography';

type Props = {
  children: React.ReactNode;
  weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  size: number;
} & TypographyProps;

const Typography: FC<Props> = ({ children, weight, size, sx, ...other }) => {
  return (
    <MuiTypography sx={{ fontWeight: weight, fontSize: size, ...sx }} {...other}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
