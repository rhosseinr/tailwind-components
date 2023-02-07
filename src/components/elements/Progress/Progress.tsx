import React from 'react';
import styles from './Progress.module.css';
import { ProgressProps } from './Progress.types';

const Progress: React.FC<ProgressProps> = ({ foo }) => (
  <div data-test-id="Progress" className={styles.Progress}>
    {foo}
  </div>
);

export default Progress;
