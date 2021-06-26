import classnames from 'classnames';
import React, { HTMLAttributes } from 'react';

interface PageProps extends HTMLAttributes<HTMLElement> {}

const Page: React.FC<PageProps> = ({ children, className }) => (
  <div className={classnames('isolate bg-gray-50 min-h-screen flex-grow relative px-16', className)}>{children}</div>
);

interface PageTitleProps extends HTMLAttributes<HTMLElement> {}

const PageTitle: React.FC<PageTitleProps> = ({ children, className, ...rest }) => (
  <h1 className={classnames('text-3xl text-gray-900 font-semibold mb-8', className)} {...rest}>{children}</h1>
);

export default Object.assign(Page, {
  Title: PageTitle
});
