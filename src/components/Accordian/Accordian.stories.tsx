// Accordian.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Typography } from '@mui/material';
import Accordian from './Accordian';

export default {
  title: 'Components/Accordian',
  component: Accordian,
} as ComponentMeta<typeof Accordian>;

export const Primary: ComponentStory<typeof Accordian> = () => <Accordian header="Header">Content</Accordian>;

export const Secondary: ComponentStory<typeof Accordian> = () => {
  const header = (
    <Box gap={0.5}>
      <Typography variant="body1" fontWeight="500">
        Collect Information
      </Typography>
      <Typography variant="caption" color="red" fontWeight="500">
        Due on July 25, 2022
      </Typography>
    </Box>
  );
  return (
    <Box sx={{ backgroundColor: '#FAFAFA' }} padding={5}>
      <Accordian header={header} styleVariant="secondary">
        Content
      </Accordian>
    </Box>
  );
};
