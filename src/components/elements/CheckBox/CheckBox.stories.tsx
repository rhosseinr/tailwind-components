import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckBox } from './CheckBox';
import { CheckBoxProps } from './CheckBox.types';

export default {
  title: 'CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

export const Default: ComponentStory<typeof CheckBox> = (
  args: CheckBoxProps
) => <CheckBox {...args} />;

Default.args = {
  title: 'checkbox',
  name: 'check',
  id: '123',
  value: 'checkItem',
  variant: 'primary',
  checkSize: 'md',
  className: '',
  disabled: false,
  checked: false,
};
