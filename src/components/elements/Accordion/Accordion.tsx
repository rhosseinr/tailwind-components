import React from 'react';
import styles from './Accordion.module.css';
import { AccordionProps } from './Accordion.types';

const Accordion: React.FC<AccordionProps> = ({ foo }) => (
  <div data-testid="Accordion" className={styles.Accordion}>
    {foo}
  </div>
);

export default Accordion;
