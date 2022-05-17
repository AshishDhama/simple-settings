import React from 'react';
import Header from '../../../shared-resources/components/Header';
import InputField from '../../../shared-resources/components/InputField';
import LineSeparator from '../../../shared-resources/components/LineSeparator';

interface Props {}

const Settings: React.FC<Props> = function (props: Props) {
  return (
    <div>
        <Header headerTitle={'Dashboard'}/>
        <LineSeparator/>
        <div className='p-8 max-w-2xl'>
        </div>
    </div>
  );
};

Settings.defaultProps = {};

export default React.memo(Settings);
