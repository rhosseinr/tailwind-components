import React from 'react';
import styles from './Avatar.module.css';
import { AvatarProps } from './Avatar.types';

const Avatar: React.FC<AvatarProps> = ({ foo }) => (
  <div data-test-id="Avatar" className={styles.Avatar}>
    {foo}
  </div>
);

export default Avatar;
