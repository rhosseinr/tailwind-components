import React from 'react';
import Button from './Button';
import { ButtonProps } from './Button.types';

export default {
  title: 'Button',
  component: Button,
};

export const Default = (args: ButtonProps) => <Button {...args}>Button</Button>;
