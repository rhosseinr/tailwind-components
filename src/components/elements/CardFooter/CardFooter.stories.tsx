import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardFooter } from './CardFooter';
import { CardFooterProps } from './CardFooter.types';

export default {
  title: 'CardFooter',
  component: CardFooter,
} as ComponentMeta<typeof CardFooter>;

export const Default: ComponentStory<typeof CardFooter> = (
  args: CardFooterProps
) => <CardFooter {...args} />;

Default.args = {
  children: 'CardFooter Title',
};
