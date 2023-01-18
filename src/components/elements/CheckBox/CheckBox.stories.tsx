import React from 'react';
import CheckBox from './CheckBox';
import { CheckBoxProps } from './CheckBox.types';

export default {
  title: 'CheckBox',
  component: CheckBox,
};

export const Default = (args: CheckBoxProps) => (
  <CheckBox
    {...args}
    title="checkbox"
    name="check"
    id="123"
    value="checkItem"
  />
);
