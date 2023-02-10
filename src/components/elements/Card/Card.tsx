import React from 'react';
import cn from 'clsx';
import styles from './Card.module.css';
import { CardProps } from './Card.types';

export const Card: React.FC<CardProps> = (props: CardProps) => {
  const {
    className = '',
    children,
    flat,
    type = 'primary',
    loading = false,
    disabled = false,
    size = 'md',
    style = {},
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
      data-test-id="Card"
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
