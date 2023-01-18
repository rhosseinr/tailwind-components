import React from 'react';
import SelectBox from './SelectBox';
import { SelectBoxProps } from './SelectBox.types';

export default {
  title: 'SelectBox',
  component: SelectBox,
};

export const Default = (args: SelectBoxProps) => (
  <SelectBox {...args} foo="I'm an example component." />
);
