// Page.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Page from './Page';

export default {
  title: 'Components/Page',
  component: Page,
} as ComponentMeta<typeof Page>;

export const Primary: ComponentStory<typeof Page> = () => <Page title="Lucid storybook"> page content goes here </Page>;
