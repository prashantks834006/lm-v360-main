// Button.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/system';
import Tabs from './Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Primary: ComponentStory<typeof Tabs> = () => {
  return (
    <Box bgcolor="#FAFAFA">
      <Tabs
        tabItems={[
          { label: 'Due Today tasks', content: <div> Due today</div> },
          { label: 'Upcoming Tasks', content: <div> Upcoming tasks </div> },
        ]}
      />
    </Box>
  );
};
