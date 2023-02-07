import React from 'react';
import styles from './Headline.module.css';
import { HeadlineProps } from './Headline.types';

const Headline: React.FC<HeadlineProps> = ({ title }) => (
  <div className={styles.headline}>
    <h1 data-test-id="Headline" className="font-bold text-5xl">
      {title}
    </h1>
    <hr className="mt-3 opacity-20" />
  </div>
);
export default Headline;
