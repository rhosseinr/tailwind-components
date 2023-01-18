import { InputHTMLAttributes } from 'react';

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  checked?: boolean;
  onChange?: (...args: any[]) => any;
  title?: string;
  value?: string;
  id?: string;
  name?: string;
}
