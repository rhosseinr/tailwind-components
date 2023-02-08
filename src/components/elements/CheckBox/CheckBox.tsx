import React from 'react';
import cn from 'clsx';
import styles from './CheckBox.module.css';
import { CheckBoxProps } from './CheckBox.types';

export const CheckBox: React.FC<CheckBoxProps> = (props) => {
  const {
    className,
    onChange,
    variant = 'primary',
    checkSize = 'md',
    checked,
    title,
    value,
    name,
    id,
    ...rest
  } = props;
  const rootClassName = cn(
    styles.root,
    styles[checkSize],
    styles[variant],
    className
  );

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
