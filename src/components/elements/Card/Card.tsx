import React from 'react';
import cn from 'clsx';
import styles from './Card.module.css';
import { CardProps } from './Card.types';

export const Card: React.FC<CardProps> = (props: CardProps) => {
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
      [styles.loading]: loading,
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
