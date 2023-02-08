import React from 'react';
import cn from 'clsx';
import styles from './Button.module.css';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    className = '',
    variant = 'primary',
    children,
    width,
    flat,
    loading = false,
    disabled = false,
    size = 'md',
    style = {},
    type = 'button',
    Component = 'button',
    ...rest
  } = props;

  const rootClassName = cn(
    styles.root,
    styles[size],
    styles[variant],
    {
      [styles.loading]: loading,
      [styles.flat]: flat,
    },
    className
  );

  return (
    <Component
      data-variant={variant}
      className={rootClassName}
      disabled={disabled}
      type={type}
      style={{
        width,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};
