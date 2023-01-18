import React from 'react';
import Accordion from './Accordion';
import { AccordionProps } from './Accordion.types';

export default {
  title: 'Accordion',
  component: Accordion,
};

export const Default = (args: AccordionProps) => (
  <Accordion {...args} foo="I'm an example component." />
);
