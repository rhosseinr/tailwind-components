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

  const rootClassName = cn(styles.root, styles[type], styles[size], className);

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
