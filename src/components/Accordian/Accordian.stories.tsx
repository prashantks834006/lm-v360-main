// Accordian.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordian from './Accordian';

export default {
  title: 'Components/Accordian',
  component: Accordian,
} as ComponentMeta<typeof Accordian>;

export const Primary: ComponentStory<typeof Accordian> = () => <Accordian title="Title">Content</Accordian>;
