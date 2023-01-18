import React from 'react';
import Loading from './Loading';
import { LoadingProps } from './Loading.types';

export default {
  title: 'Loading',
  component: Loading,
};

export const Default = (args: LoadingProps) => (
  <Loading {...args} foo="I'm an example component." />
);
