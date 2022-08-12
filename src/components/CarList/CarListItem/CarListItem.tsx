import React from 'react';
import { Stack } from '@mui/material';
import CarInfo from './CarInfo/CarInfo';
import TaskProgress from './TaskProgress/TaskProgress';
import TaskSchedule from './TaskSchedule/TaskSchedule';
import TaskCount from './TaskCount/TaskCount';
import ICar from '../../../types/Car';

interface IProps extends ICar {
  highlight?: boolean;
}

const CarListItem: React.FC<IProps> = ({
  name,
  model,
  taskName,
  taskStatus,
  schedule,
  taskCount,
  highlight = false,
}) => {
  const style = {
    border: highlight ? 2 : 1,
    borderColor: highlight ? '#456BD9' : '#E3E3E3',
    borderRadius: '6px',
    padding: '10px 16px 10px 8px',
    gap: 8,
    background: '#FFF',
    whiteSpace: 'nowrap',
    width: 'inherit',
  };
  const scheduled = Boolean(schedule);
  return (
    <Stack sx={style} direction="row">
      <CarInfo name={name} model={model} />
      <TaskProgress taskName={taskName} taskStatus={taskStatus} scheduled={scheduled} />
      <TaskSchedule schedule={schedule} />
      <TaskCount count={taskCount} scheduled={scheduled} />
    </Stack>
  );
};

export default CarListItem;
