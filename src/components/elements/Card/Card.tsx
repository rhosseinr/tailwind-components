import React from 'react';
import styles from './Card.module.css';
import { CardProps } from './Card.types';

const Card: React.FC<CardProps> = ({ foo }) => (
  <div data-testid="Card" className={styles.Card}>
    {foo}
  </div>
);

export default Card;
