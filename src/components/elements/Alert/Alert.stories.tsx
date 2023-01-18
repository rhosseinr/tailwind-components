import React from 'react';
import Alert from './Alert';
import { AlertProps } from './Alert.types';

export default {
  title: 'Alert',
  component: Alert,
};

export const Default = (args: AlertProps) => (
  <Alert {...args} foo="I'm an example component." />
);
