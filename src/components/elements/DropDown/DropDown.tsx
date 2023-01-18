import React from 'react';
import styles from './DropDown.module.css';
import { DropDownProps } from './DropDown.types';

const DropDown: React.FC<DropDownProps> = ({ foo }) => (
  <div data-testid="DropDown" className={styles.DropDown}>
    {foo}
  </div>
);

export default DropDown;
