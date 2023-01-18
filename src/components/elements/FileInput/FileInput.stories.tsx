import React from 'react';
import FileInput from './FileInput';
import { FileInputProps } from './FileInput.types';

export default {
  title: 'FileInput',
  component: FileInput,
};

export const Default = (args: FileInputProps) => (
  <FileInput {...args} foo="I'm an example component." />
);
