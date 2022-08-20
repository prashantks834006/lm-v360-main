// Filter.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Filter from './Filter';
import FILTERS from './Filter.mock';

export default {
  title: 'Components/Filter',
  component: Filter,
} as ComponentMeta<typeof Filter>;

export const Primary: ComponentStory<typeof Filter> = () => <Filter filters={FILTERS} />;
