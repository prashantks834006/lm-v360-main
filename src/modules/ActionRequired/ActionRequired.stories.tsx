// ActionRequired.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/material';
import ActionRequired from './ActionRequired';

export default {
  title: 'Components/ActionRequired',
  component: ActionRequired,
} as ComponentMeta<typeof ActionRequired>;

export const Primary: ComponentStory<typeof ActionRequired> = () => (
  <Box sx={{ backgroundColor: '#FAFAFA' }} padding={5}>
    <ActionRequired
      id={1}
      name="Collect Information"
      dueDate="Due on July 25, 2022"
      tasks={[
        { id: 1, name: 'Collect DMV info', canAutoComplete: true },
        { id: 2, name: 'Collect Delivery info' },
        { id: 3, name: 'Collect Registration info' },
      ]}
    />
  </Box>
);
