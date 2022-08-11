import React from 'react';
import { Stack } from '@mui/system';
import CarListItem from './CarListItem/CarListItem';
import ICar from '../../types/Car';

interface IProps {
  cars: ICar[];
}

const CarList: React.FC<IProps> = ({ cars }) => {
  return (
    <Stack direction="column" gap={2} width="850px">
      {cars.map((car, index) => (
        <CarListItem
          name={car.name}
          model={car.model}
          taskName={car.taskName}
          taskStatus={car.taskStatus}
          schedule={car.schedule}
          taskCount={car.taskCount}
          highlight={index === 0}
        />
      ))}
    </Stack>
  );
};

export default CarList;
