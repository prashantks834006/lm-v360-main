// Button.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/system';
import TaskSchedule from './TaskSchedule';

export default {
  title: 'TaskSchedule',
  component: TaskSchedule,
} as ComponentMeta<typeof TaskSchedule>;

export const Primary: ComponentStory<typeof TaskSchedule> = () => (
  <Box bgcolor="#FAFAFA">
    <TaskSchedule schedule="Sep. 12, 2022, 4:00PM" />
  </Box>
);
