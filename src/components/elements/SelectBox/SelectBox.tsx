import React from 'react';
import styles from './SelectBox.module.css';
import { SelectBoxProps } from './SelectBox.types';

const SelectBox: React.FC<SelectBoxProps> = ({ foo }) => (
  <div data-testid="SelectBox" className={styles.SelectBox}>
    {foo}
  </div>
);

export default SelectBox;
