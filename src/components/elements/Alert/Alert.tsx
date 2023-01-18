import React from 'react';
import styles from './Alert.module.css';
import { AlertProps } from './Alert.types';

const Alert: React.FC<AlertProps> = ({ title, message }) => (
  <div data-testid="Alert" className={styles.Alert}>
    {title}
    {message}
  </div>
);

export default Alert;
