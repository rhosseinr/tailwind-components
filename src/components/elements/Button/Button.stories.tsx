import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';
import { ButtonProps } from './Button.types';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

Default.args = {
  children: 'Button Title',
  variant: 'primary',
};
