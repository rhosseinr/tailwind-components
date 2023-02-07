import React from 'react';
import styles from './Tabs.module.css';
import { TabsProps } from './Tabs.types';

const Tabs: React.FC<TabsProps> = ({ foo }) => (
  <div data-test-id="Tabs" className={styles.Tabs}>
    {foo}
  </div>
);

export default Tabs;
