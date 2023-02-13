import { HTMLAttributes } from 'react';

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  flat: boolean;
  loading: boolean;
  disabled: boolean;
}
