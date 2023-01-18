import React from 'react';
import styles from './Loading.module.css';
import { LoadingProps } from './Loading.types';

const Loading: React.FC<LoadingProps> = ({ title: foo }) => (
  <div data-testid="Loading" className={styles.Loading}>
    {foo}
  </div>
);

export default Loading;
