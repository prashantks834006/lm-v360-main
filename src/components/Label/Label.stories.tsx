// Label.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Label from './Label';

export default {
  title: 'Components/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

export const Primary: ComponentStory<typeof Label> = () => <Label label="label" title="Main text" />;
