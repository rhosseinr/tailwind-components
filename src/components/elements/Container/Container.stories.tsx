import { ContainerProps } from 'postcss';
import React from 'react';
import Container from './Container';

export default {
  title: 'Container',
  component: Container,
};

export const Default = (args: ContainerProps) => (
  <Container {...args}>Container</Container>
);
