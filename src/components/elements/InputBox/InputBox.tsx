import React from 'react';
import cn from 'clsx';
import styles from './InputBox.module.css';
import { InputBoxProps } from './InputBox.types';

export const InputBox: React.FC = (props: InputBoxProps) => {
  const {
    className,
    id,
    name,
    validation = 'normal',
    text,
    value,
    onChange,
    ...rest
  } = props;

  const rootClassName = cn(styles.root, styles[validation], className);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
    return null;
  };

  return (
    <div className={rootClassName}>
      {text && <label htmlFor={id}>{text}</label>}
      <input
        id={id}
        name={name}
        value={value}
        onChange={handleOnChange}
        {...rest}
      />
    </div>
  );
};
