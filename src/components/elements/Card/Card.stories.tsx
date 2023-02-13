import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './Card';
import { CardHeader } from '../CardHeader';
import { CardFooter } from '../CardFooter';
import { CardProps } from './Card.types';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const Default: ComponentStory<typeof Card> = (args: CardProps) => (
  <Card {...args} />
);

export const FullCard: ComponentStory<typeof Card> = (args: CardProps) => (
  <Card {...args}>
    <CardHeader />
    <CardFooter />
  </Card>
);

Default.args = {
  children: 'Card Content',
  type: 'light',
  size: 'md',
  flat: false,
  className: '',
  loading: false,
  disabled: false,
};

FullCard.args = {
  children: 'Card Content',
  type: 'light',
  size: 'md',
  flat: false,
  className: '',
  loading: false,
  disabled: false,
};
