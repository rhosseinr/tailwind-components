import React from 'react';
import Modal from './Modal';
import { ModalProps } from './Modal.types';

export default {
  title: 'Modal',
  component: Modal,
};

export const Default = (args: ModalProps) => (
  <Modal {...args} children="I'm an example component." />
);
