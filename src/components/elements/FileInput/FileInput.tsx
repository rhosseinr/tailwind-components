import React from 'react';
import styles from './FileInput.module.css';
import { FileInputProps } from './FileInput.types';

const FileInput: React.FC<FileInputProps> = ({ foo }) => (
  <div data-test-id="FileInput" className={styles.FileInput}>
    {foo}
  </div>
);

export default FileInput;
