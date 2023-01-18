import React, { forwardRef, useRef, FC } from 'react';
import cn from 'clsx';
import styles from './Button.module.css';
import { ButtonProps } from './Button.types';

const ButtonComponent = (props: ButtonProps, buttonRef) => {
  const {
    className = '',
    variant,
    children,
    active,
    width,
    loading = false,
    disabled = false,
    style = {},
    Component = 'button',
    ...rest
  } = props;

  const ref = useRef<typeof Component>(null);

  const rootClassName = cn(
    styles.root,
    {
      [styles.primary]: variant === 'primary',
      [styles.success]: variant === 'success',
      [styles.warning]: variant === 'warning',
      [styles.danger]: variant === 'danger',
      [styles.info]: variant === 'info',
    },
    className
  );

  return (
    <Component
      aria-pressed={active}
      data-variant={variant}
      className={rootClassName}
      disabled={disabled}
      style={{
        width,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};

const Button: FC<ButtonProps> = forwardRef((props, ref) => {
  return <ButtonComponent {...props} ref={ref} />;
});

Button.displayName = 'Button';
export default Button;
