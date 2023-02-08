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
    {
      [styles.primary]: variant === 'primary',
      [styles.secondary]: variant === 'secondary',
      [styles.dark]: variant === 'dark',
      [styles.light]: variant === 'light',
      [styles.success]: variant === 'success',
      [styles.warning]: variant === 'warning',
      [styles.danger]: variant === 'danger',
      [styles.error]: variant === 'error',
      [styles.info]: variant === 'info',
    },
    {
      [styles.sm]: checkSize === 'sm',
      [styles.md]: checkSize === 'md',
      [styles.lg]: checkSize === 'lg',
      [styles.xl]: checkSize === 'xl',
    },
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
