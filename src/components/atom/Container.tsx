import React, { HTMLAttributes } from 'react';

import classnames from 'classnames';

interface ContainerProps extends HTMLAttributes<HTMLElement> {}

const Container: React.FC<ContainerProps> = ({ children, className, ...rest }) => (
  <div className={classnames('container mx-auto', className)} {...rest}>{children}</div>
);

export default Container;
