import { ButtonHTMLAttributes, JSXElementConstructor } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
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
  type?: 'submit' | 'reset' | 'button';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  Component?:
    | string
    | JSXElementConstructor<HTMLButtonElement | HTMLLinkElement>;
  width?: string | number;
  loading?: boolean;
  disabled?: boolean;
  flat?: boolean;
}
