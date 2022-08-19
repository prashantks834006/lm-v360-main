// Typography.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from './Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const H1: ComponentStory<typeof Typography> = () => (
  <Typography weight={600} size={32}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </Typography>
);
export const H2: ComponentStory<typeof Typography> = () => (
  <Typography weight={600} size={24}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </Typography>
);
export const H3: ComponentStory<typeof Typography> = () => (
  <Typography weight={600} size={16}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </Typography>
);
export const H4: ComponentStory<typeof Typography> = () => (
  <Typography weight={600} size={12}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </Typography>
);
export const H5: ComponentStory<typeof Typography> = () => (
  <Typography weight={600} size={10}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </Typography>
);
