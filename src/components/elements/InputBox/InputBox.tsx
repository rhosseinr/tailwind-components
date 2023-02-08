import React from 'react';
import cn from 'clsx';
import styles from './InputBox.module.css';
import { InputBoxProps } from './InputBox.types';

export const InputBox: React.FC = (props: InputBoxProps) => {
  const {
    className,
    id,
    name,
    state = 'normal',
    text,
    onChange,
    ...rest
  } = props;

  const rootClassName = cn(styles.root, styles[state], className);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
    return null;
  };

  return (
    <div className={rootClassName}>
      {text && <label htmlFor={id}>{text}</label>}
      <input
        id={id}
        name={name}
        onChange={handleOnChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...rest}
      />
    </div>
  );
};
