import React, { ButtonHTMLAttributes } from 'react';
import cx from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: 'primary' | 'secondary' | 'danger';
  rounded?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'none' | 'custom';
  children: any;
}

const Button: React.FC<Props> = function ({
  className,
  children,
  theme,
  rounded,
  ...rest
}) {
  const themeClasses = {
    danger: 'text-white bg-red-600 hover:bg-red-700 ',
    primary:
      'text-white bg-primary-600 border-primary-800 hover:bg-primary-800 active:bg-primary-800',
    secondary:
      'text-gray-500 border-gray-500 bg-white hover:text-white hover:bg-gray-500 hover:border-gray-500 active:bg-gray-500',
  };

  const roundedClasses = {
    xs: 'rounded',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
    none: 'rounded-none',
    custom: '',
  };

  return (
    <button
      {...rest}
      className={cx(
        'cursor-pointer px-3 py-1.5 leading-6',
        'border',
        'drop-shadow-sm hover:drop-shadow-md focus:outline-none',
        'transition duration-150 ease-in-out',
        'text-center align-middle',
        themeClasses[theme!],
        roundedClasses[rounded!],
        className
      )}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  theme: 'primary',
  rounded: 'xs',
};

export default React.memo(Button);
