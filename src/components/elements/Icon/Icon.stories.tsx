import React from 'react';
import Icon from './Icon';
import { IconProps } from './Icon.types';

export default {
  title: 'Icon',
  component: Icon,
};

export const Default = (args: IconProps) => (
  <Icon {...args} foo="I'm an example component." />
);
