import React from 'react';
import cn from 'clsx';
import styles from './Container.module.css';
import { ContainerProps } from './Container.types';

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  el = 'div',
  clean,
}) => {
  const rootClassName = cn(className, { [styles.root]: !clean });

  const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> =
    el as any;

  return <Component className={rootClassName}>{children}</Component>;
};

export default Container;
