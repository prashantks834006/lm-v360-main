// Checkbox.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Primary: ComponentStory<typeof Checkbox> = () => <Checkbox />;
