// Stepper.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Stepper from './Stepper';

export default {
  title: 'Components/Stepper',
  component: Stepper,
} as ComponentMeta<typeof Stepper>;

export const Primary: ComponentStory<typeof Stepper> = () => (
  <Stepper steps={['1', '2', '3', '4', '5', '6', '7', '8', '9']} activeStep={2} />
);
