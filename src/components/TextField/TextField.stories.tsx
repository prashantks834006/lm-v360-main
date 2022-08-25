// TextField.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextField from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

export const Primary: ComponentStory<typeof TextField> = () => (
  <TextField
    placeholder="Comment"
    sx={{ width: 1000, maxWidth: '100%' }}
    fullWidth
    // onChange={(e) => onSearch(e.target.value)}
  />
);
