import React from 'react';

import { Box, Card, Grid } from '@mui/material';
import Tabs, { TabItem } from '../components/Tabs';
import Page from '../components/Page/Page';

const Vehicle = () => {
  const tabItems: TabItem[] = [
    {
      label: 'Overview',
      content: <div>overview</div>,
    },
  ];

  return (
    <Page sx={{ bgcolor: (theme) => theme.palette.grey[300] }}>
      <Box>Header component</Box>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6} lg={4}>
          <Card sx={{ p: 2 }}>
            <Tabs tabItems={tabItems} orientation="vertical" />
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          Vehicle details
        </Grid>
      </Grid>
    </Page>
  );
};

export default Vehicle;
