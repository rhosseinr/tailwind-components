import React from 'react';
import cn from 'clsx';
import styles from './CardFooter.module.css';
import { CardFooterProps } from './CardFooter.types';

export const CardFooter: React.FC<CardFooterProps> = (props: CardFooterProps) => {
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
      data-test-id="CardFooter"
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
