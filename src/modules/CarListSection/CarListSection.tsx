import React from 'react';
import { Stack, Box } from '@mui/system';
import Tabs from '../../components/Tabs';
import CarList from '../../components/CarList/CarList';
import { CARS_DUE_TODAY, CARS_UPCOMING_TASKS } from './CarListSection.mock';

const CarListSection: React.FC = () => {
  return (
    <Stack gap={2}>
      <Box borderBottom={1} borderColor="#E3E3E3">
        <Tabs
          tabItems={[
            { label: 'Due Today', content: <CarList cars={CARS_DUE_TODAY} /> },
            { label: 'Upcoming tasks', content: <CarList cars={CARS_UPCOMING_TASKS} /> },
          ]}
        />
      </Box>
    </Stack>
  );
};

export default CarListSection;
