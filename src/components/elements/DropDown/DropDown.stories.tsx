import React from 'react';
import DropDown from './DropDown';
import { DropDownProps } from './DropDown.types';

export default {
  title: 'DropDown',
  component: DropDown,
};

export const Default = (args: DropDownProps) => (
  <DropDown {...args} foo="I'm an example component." />
);
