import { HTMLAttributes } from 'react';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  className?: string;
  type?:
    | 'warning'
    | 'danger'
    | 'error'
    | 'success'
    | 'info'
    | 'primary'
    | 'secondary';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  flat: boolean;
  message: string;
  loading: boolean;
  disabled: boolean;
  visible: boolean;
}
