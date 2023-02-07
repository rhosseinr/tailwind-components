import React from 'react';
import styles from './Switch.module.css';
import { SwitchProps } from './Switch.types';

const Switch: React.FC<SwitchProps> = ({ foo }) => (
  <div data-test-id="Switch" className={styles.Switch}>
    {foo}
  </div>
);

export default Switch;
