import React, { HTMLAttributes } from 'react';

import classnames from 'classnames';
import { Color, } from '../../types/tailwind';

interface ProgressProps extends HTMLAttributes<HTMLElement> {
  progress: number;
  variant?: Color;
  animated?: boolean;
}

const Progress: React.FC<ProgressProps> = ({ variant = 'primary', progress, animated, className }) => (
  <div className={classnames(`flex bg-gray-100 h-4 w-full rounded overflow-hidden`, className)}>
    <div className={classnames(`bg-${variant}-500 rounded `, animated && `bg-repeat bg-gradient-to-r to-${variant}-500 via-${variant}-gradient from-${variant}-500 animate-scrollRight`)} style={{width: `${progress}%`,backgroundPosition: '0px 0px',
  backgroundRepeat: 'repeat-x'}}></div>
  </div>
);

export default Progress;
