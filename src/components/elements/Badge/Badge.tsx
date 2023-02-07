import React from 'react';
import styles from './Badge.module.css';
import { BadgeProps } from './Badge.types';

const Badge: React.FC<BadgeProps> = ({ foo }) => (
  <div data-test-id="Badge" className={styles.Badge}>
    {foo}
  </div>
);

export default Badge;
