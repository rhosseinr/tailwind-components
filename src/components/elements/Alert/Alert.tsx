import React from 'react';
import cn from 'clsx';
import styles from './Alert.module.css';
import { AlertProps } from './Alert.types';

export const Alert: React.FC<AlertProps> = (props: AlertProps) => {
  const {
    className = '',
    flat,
    style = {},
    title,
    message,
    type = 'primary',
    loading = false,
    disabled = false,
    size = 'md',
    ...rest
  } = props;

  const rootClassName = cn(
    styles.root,
    {
      [styles.primary]: type === 'primary',
      [styles.secondary]: type === 'secondary',
      [styles.success]: type === 'success',
      [styles.warning]: type === 'warning',
      [styles.danger]: type === 'danger',
      [styles.error]: type === 'error',
      [styles.info]: type === 'info',
    },
    {
      [styles.sm]: size === 'sm',
      [styles.md]: size === 'md',
      [styles.lg]: size === 'lg',
      [styles.xl]: size === 'xl',
    },
    {
      [styles.loading]: loading,
      [styles.disabled]: disabled,
      [styles.flat]: flat,
    },
    className
  );

  return (
    <div
      data-test-id="Alert"
      className={rootClassName}
      style={{
        ...style,
      }}
      {...rest}
    >
      <h2>{title}</h2>
      <h6>{message}</h6>
    </div>
  );
};
