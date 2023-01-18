import React from 'react';
import styles from './Badge.module.css';
import { BadgeProps } from './Badge.types';

const Badge: React.FC<BadgeProps> = ({ foo }) => (
  <div data-testid="Badge" className={styles.Badge}>
    {foo}
  </div>
);

export default Badge;
