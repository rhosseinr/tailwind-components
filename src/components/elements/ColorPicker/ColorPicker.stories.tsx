import React from 'react';
import ColorPicker from './ColorPicker';
import { ColorPickerProps } from './ColorPicker.types';

export default {
  title: 'ColorPicker',
  component: ColorPicker,
};

export const Default = (args: ColorPickerProps) => (
  <ColorPicker {...args} foo="I'm an example component." />
);
