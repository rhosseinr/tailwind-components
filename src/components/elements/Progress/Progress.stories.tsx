import React from 'react';
import Progress from './Progress';
import { ProgressProps } from './Progress.types';

export default {
  title: 'Progress',
  component: Progress,
};

export const Default = (args: ProgressProps) => (
  <Progress {...args} foo="I'm an example component." />
);
