// Stepper.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Stepper from './Stepper';

export default {
  title: 'Components/Stepper',
  component: Stepper,
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => <Stepper {...args} />;

Template.bind({});

const steps = ['Reservation', 'Order', 'Production', 'Transit', 'Inspection', 'Delivery', 'Ownership'];

export const Primary = Template.bind({});

Primary.args = {
  steps,
  orientation: 'horizontal',
};
