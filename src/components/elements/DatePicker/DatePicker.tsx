import React from 'react';
import styles from './DatePicker.module.css';
import { DatePickerProps } from './DatePicker.types';

const DatePicker: React.FC<DatePickerProps> = ({ foo }) => (
  <div data-test-id="DatePicker" className={styles.DatePicker}>
    {foo}
  </div>
);

export default DatePicker;
