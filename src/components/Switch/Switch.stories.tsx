// Switch.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import Switch from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const Primary: ComponentStory<typeof Switch> = () => (
  <BrowserRouter>
    <Switch label="Switch label" onChange={() => ''} />
  </BrowserRouter>
);
