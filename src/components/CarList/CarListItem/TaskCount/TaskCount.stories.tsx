// Button.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/system';
import TaskCount from './TaskCount';

export default {
  title: 'TaskCount',
  component: TaskCount,
} as ComponentMeta<typeof TaskCount>;

export const Primary: ComponentStory<typeof TaskCount> = () => (
  <Box bgcolor="#FAFAFA">
    <TaskCount count={2} scheduled />
  </Box>
);
