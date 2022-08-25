// TextField.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextField from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

export const Primary: ComponentStory<typeof TextField> = () => <TextField placeHolder="Task outcome" />;
