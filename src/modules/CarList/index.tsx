import React, { useMemo } from 'react';
import { Box } from '@mui/system';
import moment from 'moment';
import { isToday } from '../../utils/date';
import Tabs from '../../components/Tabs';
import { mockCars } from './CarListSection.mock';
import ICar from '../../types/cars';
import CarTaskItem from './CarTaskItem';
import Typography from '../../components/Typography/Typography';
import Filter from '../Filter/Filter';
import FILTERS from '../Filter/Filter.mock';

function sortUpcomingTasks(items: ICar[]) {
  const cars = items
    .filter((car) => {
      return moment(car.date).isAfter(moment().endOf('day'));
    })
    .sort((a, b) => {
      return moment(a.date).diff(moment(b.date));
    });
  const tomorrowFormattedDate = moment().add(1, 'days').format('MMM DD, YYYY');
  return cars.reduce<{ [key: string]: ICar[] }>((acc, car) => {
    const formattedDate = moment(car.date).format('MMM DD, YYYY');
    if (formattedDate === tomorrowFormattedDate) {
      if (acc.tomorrow) {
        acc.tomorrow.push(car);
      } else {
        acc.tomorrow = [car];
      }
    } else if (acc[formattedDate]) {
      acc[formattedDate].push(car);
    } else {
      acc[formattedDate] = [car];
    }
    return acc;
  }, {});
}

const CarList = () => {
  const todayTasks = useMemo(() => mockCars.filter((car) => isToday(car.date)), []);
  const upcomingTasks = useMemo(() => sortUpcomingTasks(mockCars), []);
  const activeTaskId = useMemo(() => todayTasks[0].id, [todayTasks]);

  const dueTodayContent = useMemo(
    () => (
      <>
        {todayTasks.map((car) => (
          <CarTaskItem key={car.id} car={car} isActive={activeTaskId === car.id} />
        ))}
      </>
    ),
    [activeTaskId, todayTasks]
  );
  const upcomingContent = useMemo(
    () => (
      <>
        {Object.keys(upcomingTasks).map((key) => (
          <Box key={key}>
            <Typography weight={600} size={16} sx={{ textTransform: 'uppercase', my: 2 }}>
              {key}
            </Typography>
            {upcomingTasks[key].map((car) => (
              <CarTaskItem key={car.id} car={car} isActive={false} />
            ))}
          </Box>
        ))}
      </>
    ),
    [upcomingTasks]
  );

  const navItems = [
    {
      label: 'Due today',
      content: dueTodayContent,
    },
    {
      label: 'Upcoming Tasks',
      content: upcomingContent,
    },
  ];

  return (
    <Box pl={2}>
      <Tabs tabItems={navItems} sibling={<Filter filters={FILTERS} />} />
    </Box>
  );
};

export default CarList;
