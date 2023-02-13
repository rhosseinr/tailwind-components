import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardHeader } from './CardHeader';
import { CardHeaderProps } from './CardHeader.types';

export default {
  title: 'CardHeader',
  component: CardHeader,
} as ComponentMeta<typeof CardHeader>;

export const Default: ComponentStory<typeof CardHeader> = (args: CardHeaderProps) => (
  <CardHeader {...args} />
);

Default.args = {
  children: 'CardHeader Title',
};
