// ActionCompleted.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/material';
import ActionCompleted from './ActionCompleted';

export default {
  title: 'Components/ActionCompleted',
  component: ActionCompleted,
} as ComponentMeta<typeof ActionCompleted>;

export const Primary: ComponentStory<typeof ActionCompleted> = () => (
  <Box sx={{ backgroundColor: '#FAFAFA' }} padding={5}>
    <ActionCompleted
      id={1}
      name="Collect Information"
      dueDate="Due on July 25, 2022"
      tasks={[
        { id: 1, name: 'Collect DMV info', canAutoComplete: true },
        { id: 2, name: 'Collect Delivery info' },
        { id: 3, name: 'Collect Registration info' },
      ]}
      taskOutcome="Made contact"
      comment="All key details/information collected from customer."
    />
  </Box>
);
