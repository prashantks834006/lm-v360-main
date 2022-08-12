import React from 'react';
import { Stack, Typography } from '@mui/material';
import CarListItem from './CarListItem/CarListItem';
import ICar, { ICarsInDue } from '../../types/Car';

function isICar(obj: any): obj is ICar {
  return 'name' in obj;
}

const renderCarListItem = (car: ICar, highlight: boolean) => (
  <CarListItem
    name={car.name}
    model={car.model}
    taskName={car.taskName}
    taskStatus={car.taskStatus}
    schedule={car.schedule}
    taskCount={car.taskCount}
    highlight={highlight}
  />
);

interface IProps {
  cars: ICar[] | ICarsInDue[];
}

const CarList: React.FC<IProps> = ({ cars }) => {
  return (
    <Stack direction="column" gap={1} width="850px">
      {cars.map((data, index) => {
        if (isICar(data)) {
          return renderCarListItem(data, index === 0);
        }
        const carsInDue = data as ICarsInDue;
        return (
          <>
            <Typography variant="caption" fontWeight="bold">
              {carsInDue.due.toUpperCase()}
            </Typography>
            {carsInDue.cars.map((car, idx) => renderCarListItem(car, index === 0 && idx === 0))}
          </>
        );
      })}
    </Stack>
  );
};

export default CarList;
