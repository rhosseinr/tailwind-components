import React from 'react';
import Collapse from './Collapse';
import { CollapseProps } from './Collapse.types';

export default {
  title: 'Collapse',
  component: Collapse,
};

export const Default = (args: CollapseProps) => (
  <Collapse {...args} foo="I'm an example component." />
);
