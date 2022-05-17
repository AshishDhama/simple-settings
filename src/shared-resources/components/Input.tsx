import React, { InputHTMLAttributes } from 'react';
import cx from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputClasses?: string;
  errors?: string;
  touched?: boolean;
  mandatory?: boolean;
  labelClasses?: string;
  errorTipPosition?: string;
}

const Input: React.FC<Props> = function (props) {
  const {
    label,
    inputClasses,
    touched,
    errors,
    mandatory,
    labelClasses,
    errorTipPosition,
    ...rest
  } = props;
  return (
    <div className='w-full'>
      <div className='relative flex w-full flex-col items-start'>
        {label && (
          <label htmlFor={rest.id} className={cx('px-1', labelClasses)}>
            {label}
            {mandatory ? '*' : ''}
          </label>
        )}
        <input
          {...rest}
          placeholder={rest.placeholder}
          className={cx(
            'w-full rounded-md bg-transparent py-1.5 px-2',
            'border border-gray-300',
            'focus:border-gray-400 focus:outline-none',
            inputClasses
          )}
        />
        <div
          className={cx('absolute px-1 text-xs text-red-600', errorTipPosition)}
        >
          {touched && <span>{errors}</span>}
        </div>
      </div>
    </div>
  );
};

Input.defaultProps = {
  errors: '',
  mandatory: false,
  labelClasses: 'text-gray-400',
  errorTipPosition: 'top-16',
};

export default React.memo(Input);
