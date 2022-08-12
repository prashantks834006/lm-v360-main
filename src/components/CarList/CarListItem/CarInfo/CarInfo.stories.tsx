// Button.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/system';
import CarInfo from './CarInfo';

export default {
  title: 'CarInfo',
  component: CarInfo,
} as ComponentMeta<typeof CarInfo>;

export const Primary: ComponentStory<typeof CarInfo> = () => (
  <Box bgcolor="#FAFAFA">
    <CarInfo name="Elsie Harper" model="DJ8474938304562" />
  </Box>
);
