import { Box, Grid } from '@mui/material';
import React from 'react';
import CarListSection from '../CarListSection/CarListSection';
import CustomerDetailsSection from '../CustomerDetailsSection';

const TasksList = () => {
  return (
    <Grid container sx={{ mt: 4 }}>
      <Grid item sm={12} md={7}>
        <CarListSection />
      </Grid>
      <Grid item sm={12} md={5}>
        <Box bgcolor="#FAFAFA">
          <CustomerDetailsSection />
        </Box>
      </Grid>
    </Grid>
  );
};

export default TasksList;
