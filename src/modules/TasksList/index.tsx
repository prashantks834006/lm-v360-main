import React from 'react';

import { Grid } from '@mui/material';
import CustomerDetailsSection from '../CustomerDetailsSection';
import CarList from '../CarList';

const TasksList = () => {
  return (
    <Grid container sx={{ mt: 2 }} spacing={4}>
      <Grid item sm={12} md={7}>
        <CarList />
      </Grid>
      <Grid item sm={12} md={5}>
        <CustomerDetailsSection />
      </Grid>
    </Grid>
  );
};

export default TasksList;
