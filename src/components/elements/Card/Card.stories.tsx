import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './Card';
import { CardProps } from './Card.types';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const Default: ComponentStory<typeof Card> = (args: CardProps) => (
  <Card {...args} />
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
