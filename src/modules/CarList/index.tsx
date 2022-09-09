import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/system';
import moment from 'moment';
import { Skeleton, Stack } from '@mui/material';
import { ISummaryVehicle } from '../../types';
import useMetaData from '../../hooks/useMetaData';
import { META_DATA_MODULES, META_DATA_SUB_MODULES } from '../../utils/constants';
import { getVehicleSummary, getVehicleSummaryMetaData } from '../../services/vehicles';
import { isToday } from '../../utils/date';
import Tabs, { TabItem } from '../../components/Tabs';
import { mockCars } from './CarListSection.mock';
import CarTaskItem from './CarTaskItem';
import Typography from '../../components/Typography/Typography';
import Filter from '../Filter/Filter';
import FILTERS from '../Filter/Filter.mock';

function sortUpcomingTasks(items: ISummaryVehicle[]) {
  const cars = items
    .filter((car) => {
      return moment(car.date).isAfter(moment().endOf('day'));
    })
    .sort((a, b) => {
      return moment(a.date).diff(moment(b.date));
    });
  const tomorrowFormattedDate = moment().add(1, 'days').format('MMM DD, YYYY');
  return cars.reduce<{ [key: string]: ISummaryVehicle[] }>((acc, car) => {
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

const carListTabContent = (cars: ISummaryVehicle[]) => {
  const sortedCarList = sortUpcomingTasks(cars);
  const hasMultipleDates = Object.keys(sortedCarList).length > 1;

  if (hasMultipleDates) {
    return (
      <>
        {Object.keys(sortedCarList).map((key) => (
          <Box key={key} mb={1}>
            <Typography weight={500} size={12} sx={{ textTransform: 'uppercase', my: 1 }}>
              {key}
            </Typography>
            {sortedCarList[key].map((car) => (
              <CarTaskItem key={car.imageUrl} car={car} isActive={false} />
            ))}
          </Box>
        ))}
      </>
    );
  }

  return (
    <>
      {cars.map((car) => (
        <CarTaskItem key={car.imageUrl} car={car} isActive={false} />
      ))}
    </>
  );
};

const CarList = () => {
  const [navItems, setNavItems] = useState<TabItem[]>([]);
  const [loading, setLoading] = useState(true);
  const metaData = useMetaData(META_DATA_MODULES.dashboard, META_DATA_SUB_MODULES.vehicleSummary);

  const getNavItems = useCallback(async () => {
    if (!!metaData && Object.keys(metaData).length) {
      const tempNavItems: TabItem[] = [];
      for (let i = 0; i < metaData.tabs.length; i++) {
        const tab = metaData.tabs[i];
        // eslint-disable-next-line no-await-in-loop
        const vehicleSummaries = await getVehicleSummary(tab.id);
        tempNavItems.push({
          label: tab.name,
          content: carListTabContent(
            vehicleSummaries.map((car) => ({ ...car, imageUrl: car.imageUrl.replace('png', 'jpg') }))
          ),
        });
      }
      setLoading(false);
      setNavItems(tempNavItems);
    }
  }, [metaData]);

  useEffect(() => {
    getNavItems();
  }, [getNavItems]);

  return (
    <Box pl={2} width="56%">
      {loading ? (
        <Box>
          <Stack direction="row" gap={2} mb={3}>
            <Skeleton animation="wave" height={30} width={50} />
            <Skeleton animation="wave" height={30} width={50} />
          </Stack>
          <Skeleton animation="wave" height={20} width={80} />
          <Skeleton animation="wave" height={80} />
          <Skeleton animation="wave" height={80} />
          <Skeleton animation="wave" height={20} width={80} />
          <Skeleton animation="wave" height={80} />
        </Box>
      ) : (
        <Tabs tabItems={navItems} sibling={<Filter filters={FILTERS} />} />
      )}
    </Box>
  );
};

export default CarList;
