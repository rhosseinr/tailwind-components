import React from 'react';
import styles from './BreadCrumb.module.css';
import { BreadCrumbProps } from './BreadCrumb.types';

const BreadCrumb: React.FC<BreadCrumbProps> = ({ foo }) => (
  <div data-test-id="BreadCrumb" className={styles.BreadCrumb}>
    {foo}
  </div>
);

export default BreadCrumb;
