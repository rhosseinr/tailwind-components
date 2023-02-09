import { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  flat: boolean;
  loading: boolean;
  disabled: boolean;
}
