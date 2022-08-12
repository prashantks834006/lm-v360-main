// Button.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/system';
import CarList from './CarList';
import ICar from '../../types/Car';

export default {
  title: 'CarList',
  component: CarList,
} as ComponentMeta<typeof CarList>;

const cars: ICar[] = [
  {
    name: 'Stephanie Nelson',
    model: 'DJ8474938304562',
    taskName: 'Ordering',
    taskStatus: 'Collect information',
    taskCount: 2,
  },
  {
    name: 'Elsie Harper',
    model: 'DJ8474938304562',
    taskName: 'Production',
    taskStatus: 'Body in White',
    schedule: 'Sep. 12, 2022, 4:00PM',
    taskCount: 2,
  },
];

export const Primary: ComponentStory<typeof CarList> = () => (
  <Box bgcolor="#FAFAFA">
    <CarList cars={cars} />
  </Box>
);
