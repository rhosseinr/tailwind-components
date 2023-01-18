import React from 'react';
import styles from './Icon.module.css';
import { IconProps } from './Icon.types';

const Icon: React.FC<IconProps> = ({ foo }) => (
  <div data-testid="Icon" className={styles.Icon}>
    {foo}
  </div>
);

export default Icon;
