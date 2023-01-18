import React from 'react';
import Tabs from './Tabs';
import { TabsProps } from './Tabs.types';

export default {
  title: 'Tabs',
  component: Tabs,
};

export const Default = (args: TabsProps) => (
  <Tabs {...args} foo="I'm an example component." />
);
