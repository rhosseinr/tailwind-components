import React from 'react';
import Card from './Card';
import { CardProps } from './Card.types';

export default {
  title: 'Card',
  component: Card,
};

export const Default = (args: CardProps) => (
  <Card {...args} foo="I'm an example component." />
);
