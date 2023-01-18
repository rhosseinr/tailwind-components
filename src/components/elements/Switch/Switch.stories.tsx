import React from 'react';
import Switch from './Switch';
import { SwitchProps } from './Switch.types';

export default {
  title: 'Switch',
  component: Switch,
};

export const Default = (args: SwitchProps) => (
  <Switch {...args} foo="I'm an example component." />
);
