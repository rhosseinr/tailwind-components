import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';
import { ModalProps } from './Modal.types';

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const Default: ComponentStory<typeof Modal> = (args: ModalProps) => (
  <Modal {...args} />
);

Default.args = {
  children: 'Modal Title',
};
