// Chip.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Chip from './Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>;

export const Primary: ComponentStory<typeof Chip> = () => <Chip text="Chip" />;
