import { Box, Grid } from '@mui/material';
import React from 'react';
import Page from '../components/Page/Page';

const Vehicle = () => {
  return (
    <Page title="V360 | Air Dream Edition(GT)">
      <Box>Header component</Box>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6} lg={4}>
          Vertical tabs
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          Vehicle details
        </Grid>
      </Grid>
    </Page>
  );
};

export default Vehicle;
