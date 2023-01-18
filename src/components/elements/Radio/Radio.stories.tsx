import React from 'react';
import Radio from './Radio';
import { RadioProps } from './Radio.types';

export default {
  title: 'Radio',
  component: Radio,
};

export const Default = (args: RadioProps) => (
  <Radio {...args} foo="I'm an example component." />
);
