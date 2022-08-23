import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import CustomerDetailsSection from './CustomerDetails';

export default {
  title: 'Modules/CustomerDetailsSection',
  component: CustomerDetailsSection,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ width: '678px', height: 'auto' }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
} as ComponentMeta<typeof CustomerDetailsSection>;

export const Primary: ComponentStory<typeof CustomerDetailsSection> = () => <CustomerDetailsSection />;
