import React from 'react';
import Badge from './Badge';
import { BadgeProps } from './Badge.types';

export default {
  title: 'Badge',
  component: Badge,
};

export const Default = (args: BadgeProps) => (
  <Badge {...args} foo="I'm an example component." />
);
