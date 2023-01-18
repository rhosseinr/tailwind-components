import React from 'react';
import InputBox from './InputBox';
import { InputBoxProps } from './InputBox.types';

export default {
  title: 'InputBox',
  component: InputBox,
};

export const Default = (args: InputBoxProps) => <InputBox {...args} />;
