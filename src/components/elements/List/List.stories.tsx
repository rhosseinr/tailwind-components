import React from 'react';
import List from './List';
import { ListProps } from './List.types';

export default {
  title: 'List',
  component: List,
};

export const Default = (args: ListProps) => (
  <List {...args} foo="I'm an example component." />
);
