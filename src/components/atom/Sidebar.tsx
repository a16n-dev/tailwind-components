import { default as classNames, default as classnames } from 'classnames';
import React, { ButtonHTMLAttributes, HTMLAttributes, useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import { renderChildrenWithClassName } from '../util/util';
import Expand from './Expand';
import Ripple from './Ripple';

interface SidebarProps extends HTMLAttributes<HTMLElement> {
  noBg?: boolean;
}

const isExpanded = (props: any) => (props as any)['expanded'];

const Sidebar: React.FC<SidebarProps> = ({ noBg, children, className }) => {
  const [expanded, setExpanded] = useState<boolean>(true);
  const [fixed, setFixed] = useState<boolean>(true);

  useEffect(() => {
    setExpanded(fixed);
  }, [fixed]);

  return (
    <div
      className={classnames(
        'flex flex-col sticky inset-y-0 min-h-screen max-h-screen transition-width duration-500 z-10 py-6 text-gray-600',
        noBg ? 'text-white bg-gray-50' : ' bg-white shadow-lg',
        expanded ? 'w-64 px-4' : 'w-16',
        className
      )}
      // onClick={() => {
      //   setFixed((v) => !v);
      // }}
      onMouseEnter={() => !fixed && setExpanded(true)}
      onMouseLeave={() => !fixed && setExpanded(false)}
    >
      {fixed ? 'Fixed' : 'not fixed'}
      {React.Children.map(children, (child: any) =>
        React.createElement(child?.type, {
          ...child.props,
          expanded,
        })
      )}
    </div>
  );
};

interface SidebarBrandProps extends HTMLAttributes<HTMLElement> {}

const SidebarBrand: React.FC<SidebarBrandProps> = ({ children, className, ...rest }) => (
  <div className={classnames('', className)} {...rest}>
    {children}
  </div>
);

interface SidebarSectionHeaderProps extends HTMLAttributes<HTMLElement> {}

const SidebarSectionHeader: React.FC<SidebarSectionHeaderProps> = ({
  children,
  className,
  ...rest
}) => {
  const expanded = isExpanded(rest);

  return (
    <div
      className={classnames(
        'bg-primary-50 my-2 py-2 px-4 rounded-xl flex flex-col justify-between  text-primary-500 font-semibold',
        expanded ? 'items-start' : 'items-center',
        className
      )}
      {...rest}
    >
      {expanded ? children : 'GS'}
    </div>
  );
};

interface SidebarItemProps extends HTMLAttributes<HTMLElement> {
  icon?: IconType;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ children, className, icon: Icon, ...rest }) => (
  <Ripple
    grow
    className={'my-1'}
    rippleClassName='bg-primary-200'
    rippleContainerClassName='rounded-xl'
  >
    <button
      className={classnames(
        'focus:outline-none text-sm font-semibold p-3 hover:bg-primary-100 hover:text-primary-600 focus:bg-primary-100 focus:text-primary-500 rounded-xl flex items-center transition-colors',
        className
      )}
      {...rest}
    >
      {Icon && <Icon size={20} className={'mr-2 z-10'} />}
      {/* {children && renderChildrenWithClassName(children, 'z-10')} */}
      {children}
    </button>
  </Ripple>
);

interface SidebarDropdownProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconType;
  title: string;
}

const SidebarDropdown: React.FC<SidebarDropdownProps> = ({
  children,
  className,
  icon: Icon,
  title,
  ...rest
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <>
      <SidebarItem onClick={() => setExpanded((v) => !v)} {...rest} icon={Icon}>
        <div className={'flex-grow text-left'}>{title}</div>
        <FiChevronRight
          size={20}
          className={classNames(
            'transform transition-transform z-10',
            expanded ? 'rotate-90' : 'rotate-0'
          )}
        />
      </SidebarItem>
      <Expand expanded={expanded}>{children}</Expand>
    </>
  );
};

interface SidebarDropdownItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SidebarDropdownItem: React.FC<SidebarDropdownItemProps> = ({
  children,
  className,
  ...rest
}) => (
  <button
    className={classnames(
      'ml-6 py-1 px-2 text-sm font-semibold hover:bg-primary-50 flex rounded-xl focus:outline-none',
      className
    )}
    {...rest}
  >
    {children}
  </button>
);

export default Object.assign(Sidebar, {
  Dropdown: SidebarDropdown,
  Header: SidebarSectionHeader,
  Item: SidebarItem,
  DropdownItem: SidebarDropdownItem,
});
