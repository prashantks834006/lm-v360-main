// Button.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/system';
import CustomerDetailsSection from './CustomerDetailsSection';

export default {
  title: 'CustomerDetailsSection',
  component: CustomerDetailsSection,
} as ComponentMeta<typeof CustomerDetailsSection>;

export const Primary: ComponentStory<typeof CustomerDetailsSection> = () => (
  <Box bgcolor="#FAFAFA">
    <CustomerDetailsSection />
  </Box>
);
