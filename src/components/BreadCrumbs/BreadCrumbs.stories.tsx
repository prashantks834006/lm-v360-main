// BreadCrumbs.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs';

export default {
  title: 'Components/BreadCrumbs',
  component: BreadCrumbs,
} as ComponentMeta<typeof BreadCrumbs>;

export const Primary: ComponentStory<typeof BreadCrumbs> = () => (
  <BrowserRouter>
    <BreadCrumbs
      links={[
        { label: 'Dashboard', link: '/' },
        { label: 'Users', link: '/users' },
        { label: 'Robert', link: '' },
      ]}
    />
  </BrowserRouter>
);
