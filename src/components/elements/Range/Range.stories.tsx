import React from 'react';
import Range from './Range';
import { RangeProps } from './Range.types';

export default {
  title: 'Range',
  component: Range,
};

export const Default = (args: RangeProps) => (
  <Range {...args} foo="I'm an example component." />
);
