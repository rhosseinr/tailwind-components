import React from 'react';
import styles from './Range.module.css';
import { RangeProps } from './Range.types';

const Range: React.FC<RangeProps> = ({ foo }) => (
  <div data-testid="Range" className={styles.Range}>
    {foo}
  </div>
);

export default Range;
