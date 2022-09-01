// Select.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from './Select';

export default {
  title: 'Components/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const options = [
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    label: 'Banana',
    value: 'Banana',
  },
  {
    label: 'Orange',
    value: 'Orange',
  },
];

export const Primary: ComponentStory<typeof Select> = () => <Select options={options} title="Fruits" />;
