import React from 'react';
import styles from './Radio.module.css';
import { RadioProps } from './Radio.types';

const Radio: React.FC<RadioProps> = ({ foo }) => (
  <div data-test-id="Radio" className={styles.Radio}>
    {foo}
  </div>
);

export default Radio;
