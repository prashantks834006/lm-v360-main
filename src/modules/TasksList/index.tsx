import React from 'react';

import { Grid } from '@mui/material';
import CustomerDetailsSection from '../CustomerDetailsSection';
import CarList from '../CarList';

const TasksList = () => {
  return (
    <Grid container sx={{ mt: 2 }} spacing={4}>
      <Grid item sm={12} md={8}>
        <CarList />
      </Grid>
      <Grid item sm={12} md={4}>
        <CustomerDetailsSection />
      </Grid>
    </Grid>
  );
};

export default TasksList;
