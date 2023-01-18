import { InputHTMLAttributes } from 'react';

export interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onChange?: (...args: any[]) => any;
  ref?: any;
}
