import { InputHTMLAttributes } from 'react';

export interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  text?: string;
  value?: string | number;
  validation?: 'normal' | 'error' | 'success';
}
