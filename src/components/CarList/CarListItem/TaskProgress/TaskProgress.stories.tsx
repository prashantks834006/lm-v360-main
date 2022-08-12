// Button.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/system';
import TaskProgress from './TaskProgress';

export default {
  title: 'TaskProgress',
  component: TaskProgress,
} as ComponentMeta<typeof TaskProgress>;

export const Primary: ComponentStory<typeof TaskProgress> = () => (
  <Box bgcolor="#FAFAFA">
    <TaskProgress taskName="Delivery" taskStatus="In progress" />
  </Box>
);
