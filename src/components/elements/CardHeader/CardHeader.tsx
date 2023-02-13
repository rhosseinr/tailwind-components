import React from 'react';
import cn from 'clsx';
import styles from './CardHeader.module.css';
import { CardHeaderProps } from './CardHeader.types';

export const CardHeader: React.FC<CardHeaderProps> = (props: CardHeaderProps) => {
  const {
    className = '',
    children,
    flat,
    loading = false,
    disabled = false,
    style = {},
    ...rest
  } = props;

  const rootClassName = cn(
    styles.root,
    {
      [styles.disabled]: disabled,
      [styles.loading]: loading,
      [styles.flat]: flat,
    },
    className
  );

  return (
    <div
      data-test-id="CardHeader"
      className={rootClassName}
      style={{
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};
