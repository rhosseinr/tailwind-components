import React from 'react';
import styles from './List.module.css';
import { ListProps } from './List.types';

const List: React.FC<ListProps> = ({ foo }) => (
  <div data-testid="List" className={styles.List}>
    {foo}
  </div>
);

export default List;