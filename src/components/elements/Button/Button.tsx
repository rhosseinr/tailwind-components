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
      [styles.sm]: size === 'sm',
      [styles.md]: size === 'md',
      [styles.lg]: size === 'lg',
      [styles.xl]: size === 'xl',
    },
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
