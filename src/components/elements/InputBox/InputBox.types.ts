import { InputHTMLAttributes } from 'react';

export interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  value?: string | number;
  onChange?: (...args: any[]) => any;
  ref?: any;
}
