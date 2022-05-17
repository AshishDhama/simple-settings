import React from 'react';
import { FaSpinner } from 'react-icons/fa';

interface Props {}

const LoadingPage: React.FC<Props> = function () {
  return (
    <div className=''>
      <FaSpinner className=''/>
    </div>
  );
};

LoadingPage.defaultProps = {};

export default React.memo(LoadingPage);
