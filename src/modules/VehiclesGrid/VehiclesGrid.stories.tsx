// VehiclesGrid.stories.ts|tsx

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import VehiclesGrid from '.';

export default {
  title: 'Components/VehiclesGrid',
  component: VehiclesGrid,
} as ComponentMeta<typeof VehiclesGrid>;

export const Primary: ComponentStory<typeof VehiclesGrid> = () => (
  <MemoryRouter initialEntries={['/']}>
    <VehiclesGrid />
  </MemoryRouter>
);
