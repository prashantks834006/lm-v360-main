// StepperVertical.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StepperVertical from './StepperVertical';

export default {
  title: 'Components/StepperVertical',
  component: StepperVertical,
} as ComponentMeta<typeof StepperVertical>;

const Template: ComponentStory<typeof StepperVertical> = (args) => <StepperVertical {...args} />;

Template.bind({});

const steps = ['En-route', 'In yard'];

export const Horizontal = Template.bind({});

Horizontal.args = {
  steps,
};
