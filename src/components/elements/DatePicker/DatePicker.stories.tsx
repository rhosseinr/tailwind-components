import React from 'react';
import DatePicker from './DatePicker';
import { DatePickerProps } from './DatePicker.types';

export default {
  title: 'DatePicker',
  component: DatePicker,
};

export const Default = (args: DatePickerProps) => (
  <DatePicker {...args} foo="I'm an example component." />
);
