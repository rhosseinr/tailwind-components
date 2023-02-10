import { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  type?:
    | 'light'
    | 'dark'
    | 'warning'
    | 'danger'
    | 'error'
    | 'success'
    | 'info'
    | 'primary'
    | 'secondary';
  className?: string;
  flat: boolean;
  loading: boolean;
  disabled: boolean;
}
