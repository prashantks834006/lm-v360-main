// Button.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/system';
import CarListItem from './CarListItem';

export default {
  title: 'CarListItem',
  component: CarListItem,
} as ComponentMeta<typeof CarListItem>;

export const Primary: ComponentStory<typeof CarListItem> = () => (
  <Box bgcolor="#FAFAFA">
    <CarListItem
      name="Elsie Harper"
      model="DJ8474938304562"
      taskName="Delivery"
      taskStatus="In progress"
      schedule="Sep. 12, 2022, 4:00PM"
      taskCount={2}
    />
  </Box>
);
