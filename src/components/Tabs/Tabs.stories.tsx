// Button.stories.ts|tsx

import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/system';
import Tabs from './Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Primary: ComponentStory<typeof Tabs> = () => {
  const [selectedTab, setselectedTab] = useState(0);
  return (
    <Box bgcolor="#FAFAFA">
      <Tabs tabs={['Due Today', 'Upcoming Tasks']} selectedTab={selectedTab} setselectedTab={setselectedTab} />
    </Box>
  );
};
