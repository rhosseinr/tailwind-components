import React from 'react';
import cn from 'clsx';
import styles from './Headline.module.css';
import { HeadlineProps } from './Headline.types';

export const Headline: React.FC<HeadlineProps> = (props: HeadlineProps) => {
  const {
    className = '',
    style = {},
    separator,
    title,
    type = 'primary',
    size = 'h1',
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
      [styles.h1]: size === 'h1',
      [styles.h2]: size === 'h2',
      [styles.h3]: size === 'h3',
      [styles.h4]: size === 'h4',
      [styles.h5]: size === 'h5',
      [styles.h6]: size === 'h6',
    },
    className
  );

  const Heading = size;

  return (
    <>
      <Heading
        data-test-id="Headline"
        className={rootClassName}
        style={{
          ...style,
        }}
        {...rest}
      >
        {title}
      </Heading>
      {separator && <hr className="mb-3 opacity-20" />}
    </>
  );
};
