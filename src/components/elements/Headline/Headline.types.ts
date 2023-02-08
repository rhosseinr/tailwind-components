import { HTMLAttributes } from 'react';

export interface HeadlineProps extends HTMLAttributes<HTMLElement> {
  title: string;
  className?: string;
  separator?: boolean;
  type?:
    | 'warning'
    | 'danger'
    | 'error'
    | 'success'
    | 'info'
    | 'primary'
    | 'secondary';
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
