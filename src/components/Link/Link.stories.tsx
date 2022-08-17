// Link.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import Link from './Link';

export default {
  title: 'Components/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

export const Primary: ComponentStory<typeof Link> = () => (
  <BrowserRouter>
    <Link to="/"> Go there </Link>
  </BrowserRouter>
);
