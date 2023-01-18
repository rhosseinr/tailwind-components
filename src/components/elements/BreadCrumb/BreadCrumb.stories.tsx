import React from 'react';
import BreadCrumb from './BreadCrumb';
import { BreadCrumbProps } from './BreadCrumb.types';

export default {
  title: 'BreadCrumb',
  component: BreadCrumb,
};

export const Default = (args: BreadCrumbProps) => (
  <BreadCrumb {...args} foo="I'm an example component." />
);
