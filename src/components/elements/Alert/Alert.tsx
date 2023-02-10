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
    styles[size],
    styles[type],
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
