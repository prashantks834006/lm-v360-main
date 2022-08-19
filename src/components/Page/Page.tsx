import React, { forwardRef, ReactNode } from 'react';
import { Box, BoxProps } from '@mui/material';

interface Props extends BoxProps {
  children: ReactNode;
  meta?: ReactNode;
}

const Page = forwardRef<HTMLDivElement, Props>(({ children, ...other }, ref) => (
  <Box ref={ref} {...other}>
    {children}
  </Box>
));

export default Page;
