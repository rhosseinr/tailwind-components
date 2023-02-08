import React from 'react';
import cn from 'clsx';
import styles from './InputBox.module.css';
import { InputBoxProps } from './InputBox.types';

export const InputBox: React.FC = (props: InputBoxProps) => {
  const { className, onChange, ...rest } = props;

  const rootClassName = cn(styles.root, {}, className);

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value);
    }
    return null;
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label>
      <input
        className={rootClassName}
        onChange={handleOnChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...rest}
      />
    </label>
  );
};
