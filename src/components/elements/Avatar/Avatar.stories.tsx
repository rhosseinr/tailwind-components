import React from 'react';
import Avatar from './Avatar';
import { AvatarProps } from './Avatar.types';

export default {
  title: 'Avatar',
  component: Avatar,
};

export const Default = (args: AvatarProps) => (
  <Avatar {...args} foo="I'm an example component." />
);
