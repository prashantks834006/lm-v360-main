import React, { useState } from 'react';
import { Stack, Box } from '@mui/system';
import Tabs from '../../components/Tabs';
import CarList from '../../components/CarList/CarList';
import { CARS_DUE_TODAY, CARS_UPCOMING_TASKS } from './CarListSection.mock';

const CarListSection: React.FC = () => {
  const [selectedTab, setselectedTab] = useState(0);
  return (
    <Stack gap={2}>
      <Box borderBottom={1} borderColor="#E3E3E3">
        <Tabs tabs={['Due Today', 'Upcoming Tasks']} selectedTab={selectedTab} setselectedTab={setselectedTab} />
      </Box>
      {selectedTab === 0 && <CarList cars={CARS_DUE_TODAY} />}
      {selectedTab === 1 && <CarList cars={CARS_UPCOMING_TASKS} />}
    </Stack>
  );
};

export default CarListSection;
