import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert } from './Alert';
import { AlertProps } from './Alert.types';

export default {
  title: 'Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

export const Default: ComponentStory<typeof Alert> = (args: AlertProps) => (
  <Alert {...args} />
);

Default.args = {
  title: 'Alert Title',
  message: 'Alert Message',
  type: 'primary',
};
