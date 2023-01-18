import React from 'react';
import Rating from './Rating';
import { RatingProps } from './Rating.types';

export default {
  title: 'Rating',
  component: Rating,
};

export const Default = (args: RatingProps) => (
  <Rating {...args} foo="I'm an example component." />
);
