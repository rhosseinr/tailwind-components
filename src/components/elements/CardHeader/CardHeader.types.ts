import { HTMLAttributes } from 'react';

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  flat: boolean;
  loading: boolean;
  disabled: boolean;
}
