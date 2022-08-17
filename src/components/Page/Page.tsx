import React, { forwardRef, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
// @mui
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  children: ReactNode;
  meta?: ReactNode;
  title: string;
}
const Page = forwardRef<HTMLDivElement, Props>(({ children, title = 'Lucid V360', meta, ...other }, ref) => (
  <>
    <Helmet>
      <title>{`${title} | Any Homeo `}</title>
      {meta}
    </Helmet>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

export default Page;
