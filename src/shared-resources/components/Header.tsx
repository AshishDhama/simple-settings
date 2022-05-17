import React from 'react';
export interface HeaderProps {
  headerTitle: string;
  children?: any;
}

const Header: React.FC<HeaderProps> = function (props: HeaderProps) {
  const { headerTitle, children } = props;
  return (
    <div className='sticky top-0 z-20 flex h-20 flex-row items-center justify-between px-8'>
      <div className='z-[1] flex flex-col items-start justify-center'>
        <h2 className='text-2xl text-primary-700'>{headerTitle}</h2>
      </div>
      {children || ''}
    </div>
  );
};

Header.defaultProps = {};

export default React.memo(Header);
