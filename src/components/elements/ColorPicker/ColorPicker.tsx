import React from 'react';
import styles from './ColorPicker.module.css';
import { ColorPickerProps } from './ColorPicker.types';

const ColorPicker: React.FC<ColorPickerProps> = ({ foo }) => (
  <div data-test-id="ColorPicker" className={styles.ColorPicker}>
    {foo}
  </div>
);

export default ColorPicker;
