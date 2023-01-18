import React, { Component, FC, forwardRef, useRef } from 'react';
import cn from 'clsx';
import styles from './InputBox.module.css';
import { InputBoxProps } from './InputBox.types';

const InputBoxComponent = (props: InputBoxProps, inputRef) => {
  const { className, onChange, ...rest } = props;

  const rootClassName = cn(styles.root, {}, className);
  const ref = useRef<typeof Component>(null);

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

const InputBox: FC<InputBoxProps> = forwardRef((props, ref) => {
  return <InputBoxComponent {...props} ref={ref} />;
});

InputBox.displayName = 'InputBox';
export default InputBox;
