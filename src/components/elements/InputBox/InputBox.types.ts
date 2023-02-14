import { InputHTMLAttributes } from 'react';

export interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  text?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  autofocus?: boolean;
  autocomplete?: boolean;
  value?: string | number;
  validation?: 'normal' | 'error' | 'success';
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'month'
    | 'search'
    | 'tel'
    | 'url'
    | 'week'
    | 'hidden'
    | 'date'
    | 'datetime-local'
    | 'time';
}
