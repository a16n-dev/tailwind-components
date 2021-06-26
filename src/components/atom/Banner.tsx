import classnames from 'classnames';
import React, { HTMLAttributes } from 'react';
import { Color } from '../../types/tailwind';

interface BannerProps extends HTMLAttributes<HTMLElement> {
  variant?: Color;
  gradient?: boolean;
}

const Banner: React.FC<BannerProps> = ({
  variant = 'primary',
  gradient,
  children,
  className,
  ...rest
}) => (
  <>
    <div
      className={classnames(
        'flex items-center justify-center w-full h-12 text-center text-white font-bold',
        gradient && 'bg-gradient-to-tr',
        `bg-${variant}-500 from-${variant}-500 to-${variant}-gradient`,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  </>
);

export default Banner;
