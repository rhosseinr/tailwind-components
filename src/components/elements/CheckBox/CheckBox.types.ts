import { InputHTMLAttributes } from 'react';

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  checked?: boolean;
  variant?:
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'error'
  | 'warning'
  | 'success'
  | 'info'
  | 'light'
  | 'dark';
  checkSize?: 'sm' | 'md' | 'lg' | 'xl';
  onChange?: (...args: any[]) => any;
  title?: string;
  value?: string;
  id?: string;
  name?: string;
}
