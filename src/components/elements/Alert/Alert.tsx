import React from 'react';
import styles from './Alert.module.css';
import { AlertProps } from './Alert.types';

const Alert: React.FC<AlertProps> = ({ title, message }) => (
  <div data-test-id="Alert" className={styles.Alert}>
    {title}
    {message}
  </div>
);

export default Alert;
