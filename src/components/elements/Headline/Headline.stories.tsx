import React from 'react';
import Headline from './Headline';
import { HeadlineProps } from './Headline.types';

export default {
  title: 'Headline',
  component: Headline,
};

export const Default = (args: HeadlineProps) => (
  <Headline {...args} title="I'm an example" />
);
