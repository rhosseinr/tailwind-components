import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Headline } from './Headline';
import { HeadlineProps } from './Headline.types';

export default {
  title: 'Headline',
  component: Headline,
} as ComponentMeta<typeof Headline>;

export const Default: ComponentStory<typeof Headline> = (
  args: HeadlineProps
) => <Headline {...args} />;

Default.args = {
  title: 'Headline Title',
  size: 'h1',
  className: '',
  separator: true,
  type: 'normal',
};
