import { InputHTMLAttributes } from 'react';

export interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  text?: string;
  value?: string | number;
  state?: 'normal' | 'error' | 'success';
  onChange?: (...args: any[]) => any;
}
