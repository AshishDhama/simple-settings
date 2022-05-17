import React from 'react';
import { FaSpinner } from 'react-icons/fa';

interface Props {}

const Loader: React.FC<Props> = function (props) {
  return (
    <div className='flex  h-10 w-full items-center justify-center'>
      <FaSpinner className='animate-spin' />
    </div>
  );
};

Loader.defaultProps = {};

export default React.memo(Loader);
