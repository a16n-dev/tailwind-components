import classnames from 'classnames';
import React, { CSSProperties, HTMLAttributes, useEffect, useRef, useState } from 'react';

interface RippleProps extends HTMLAttributes<HTMLElement>{
  grow?: boolean;
  disabled?: boolean;
  rippleClassName?: string;
  rippleContainerClassName?: string;
}

const INITIAL_SIZE = 5;

const Ripple: React.FC<RippleProps> = ({ rippleClassName, rippleContainerClassName, children, grow, disabled, className, ...rest }) => {
  const timer = useRef<number>();

  const [rippleStyle, setRippleStyle] = useState<CSSProperties>();

  useEffect(
    () => () => {
      clearTimeout(timer.current);
    },
    []
  );

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { pageX, pageY, currentTarget } = e;

    console.log('well');

    const bounds = currentTarget.getBoundingClientRect();

    const left = pageX - (bounds.left + window.scrollX);
    const top = pageY - (bounds.top + window.scrollY);
    const size = Math.max(bounds.width, bounds.height);

    setRippleStyle(() => {
      console.log('h');

      timer.current = setTimeout(() => {
        setRippleStyle({
          left,
          top,
          opacity: 0,
          transform: `scale(${(size / INITIAL_SIZE) * 2})`,
          transition: 'all 1000ms',
        });
      }, 50) as any;

      return {
        left,
        top,
        transform: 'translate(-50%, -50%)',
        transition: 'initial',
        opacity: 1
      };
    });
  };

  return (
    <div onMouseDown={handleClick} className={classnames('relative isolate', grow ? 'grid' : 'max-w-max flex', className)} {...rest}>
      {children}
      {!disabled && (
        <div className={classnames('absolute inset-0 pointer-events-none overflow-hidden', rippleContainerClassName)}>
          <div style={rippleStyle} className={classnames('rounded-full absolute w-1 h-1 opacity-0', rippleClassName || 'bg-white bg-opacity-50')} />
        </div>
      )}
    </div>
  );
};

export default Ripple;
