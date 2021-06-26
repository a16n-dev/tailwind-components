import classnames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';
import { Color, Size } from '../../types/tailwind';
import Ripple from './Ripple';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Color;
  gradient?: boolean;
  size?: Size;
  outline?: boolean;
  /**
   * Allow the button to grow to fit the width of its container
   */
  grow?: boolean;
  /**
   * Classnames to apply to the inner button element
   */
  innerClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  innerClassName,
  gradient,
  outline,
  grow,
  disabled,
  ...rest
}) => (
  <Ripple grow={grow} className={classnames(outline && '-m-0.5', className)} disabled={disabled}>
    <button
      className={classnames(
        'rounded font-bold focus:ring transition transform duration-300 ease-in-out focus:outline-none',
        !disabled && 'shadow',
        {
          'text-xs px-4 py-2': size === 'sm',
          'text-sm px-5 py-3': size === 'md',
          'text-lg px-7 py-3': size === 'lg',
        },
        outline ? ' border-2' : 'text-gray-50',
        gradient && 'bg-gradient-to-tr',
        [
          `ring-${variant}-200`,
          outline
            ? disabled ? `border-${variant}-200 text-${variant}-200` : `border-${variant}-500 text-${variant}-500 hover:bg-${variant}-500 hover:text-gray-50`
            : disabled ? `bg-${variant}-400` : `from-${variant}-500 to-${variant}-gradient bg-${variant}-500`,
        ],
        innerClassName
      )}
      disabled={disabled}
       {...rest}
    >
      {children}
    </button>
  </Ripple>
);

export default Button;
