// Button.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/system';
import CarListSection from './CarListSection';

export default {
  title: 'CarListSection',
  component: CarListSection,
} as ComponentMeta<typeof CarListSection>;

export const Primary: ComponentStory<typeof CarListSection> = () => {
  return (
    <Box bgcolor="#FAFAFA">
      <CarListSection />
    </Box>
  );
};
