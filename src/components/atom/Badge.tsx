import classnames from 'classnames';
import React, { HTMLAttributes } from 'react';
import { Color } from '../../types/tailwind';

interface BadgeProps extends HTMLAttributes<HTMLElement> {
  variant?: Color;
  gradient?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ variant = 'primary', gradient, children, className, ...rest }) => (
  <div
    className={classnames(
      gradient && `from-${variant}-500 to-${variant}-gradient bg-gradient-to-tr`,
      `bg-${variant}-500 text-${variant}-100 font-bold px-2 py-0.5 rounded`,
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

export default Badge;
