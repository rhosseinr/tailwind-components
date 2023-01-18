import React from 'react';
import cn from 'clsx';
import styles from './CheckBox.module.css';
import { CheckBoxProps } from './CheckBox.types';

const CheckBox: React.FC<CheckBoxProps> = (props) => {
  const { className, onChange, checked, title, value, name, id, ...rest } =
    props;
  const rootClassName = cn(styles.root, {}, className);

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value);
    }
    return null;
  };

  return (
    <div className={rootClassName}>
      <input
        type="checkbox"
        id={id}
        onChange={handleOnChange}
        name={name}
        value={value}
        checked={checked}
        {...rest}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  );
};

export default CheckBox;
