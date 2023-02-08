import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputBox } from './InputBox';
import { InputBoxProps } from './InputBox.types';

export default {
  title: 'InputBox',
  component: InputBox,
} as ComponentMeta<typeof InputBox>;

export const Default: ComponentStory<typeof InputBox> = (
  args: InputBoxProps
) => <InputBox {...args} />;

Default.args = {
  value: '',
  text: 'name',
};
