import React from 'react';
import Header from '../../../shared-resources/components/Header';
import InputField from '../../../shared-resources/components/InputField';
import LineSeparator from '../../../shared-resources/components/LineSeparator';

interface Props {}

const Settings: React.FC<Props> = function (props: Props) {
  return (
    <div>
        <Header headerTitle={'User Settings'}/>
        <LineSeparator/>
        <div className='p-8 max-w-2xl'>
            <InputField placeholder={'Name'} value={'Ashish'}></InputField>
            <InputField placeholder={'email'} value={'ramdom@gmail.com'}></InputField>

            <div className='rounded border-2 pr-8 pl-8 pb-8 '>
                <Header headerTitle={'Carrier Settings'}/>
                <LineSeparator/>
                <InputField placeholder={'Carrier 1 ID'} value={'12345'}></InputField>
                <InputField placeholder={'Carrier 2 ID'} value={'45567'}></InputField>
            </div>
        </div>
    </div>
  );
};

Settings.defaultProps = {};

export default React.memo(Settings);
