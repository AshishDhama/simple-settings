import React, { InputHTMLAttributes } from 'react';
import cx from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isDisabled?: boolean;
  classNames?: string;
  checked?: boolean;
  errors?: string;
  touched?: boolean;
}

const CheckBox: React.FC<Props> = function (props: Props) {
  const { isDisabled, classNames, checked, errors, touched, ...rest } = props;
  return (
    <input
      {...rest}
      type='checkbox'
      disabled={isDisabled}
      checked={checked}
      className={cx(
        'form-checkbox mr-2 rounded text-primary-700 focus:outline-none focus:ring-0 focus:ring-offset-0',
        isDisabled ? 'cursor-not-allowed opacity-50' : 'opacity-100',
        classNames
      )}
    />
  );
};

CheckBox.defaultProps = {
  isDisabled: false,
};

export default React.memo(CheckBox);
