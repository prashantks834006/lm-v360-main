import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CustomerDetailsSection from './CustomerDetails';

export default {
  title: 'Modules/CustomerDetailsSection',
  component: CustomerDetailsSection,
  decorators: [
    (Story) => (
      <div style={{ width: '678px', height: 'auto' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof CustomerDetailsSection>;

export const Primary: ComponentStory<typeof CustomerDetailsSection> = () => <CustomerDetailsSection />;
