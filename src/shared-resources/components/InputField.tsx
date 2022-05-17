import React, { InputHTMLAttributes } from 'react';
import cx from 'classnames';

interface props extends InputHTMLAttributes<HTMLInputElement> {
  errors?: any;
  touched?: any;
  placeholder?: string;
  className?: string;
}
const InputField: React.FC<props> = function ({
  id,
  name,
  errors,
  touched,
  className,
  placeholder,
  ...rest
}) {
  return (
    <div className='relative py-5'>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        {...rest}
        className={cx(
          'text-hint focus:border-dark peer border-hint w-full border-b bg-transparent pb-1 placeholder-transparent transition-colors focus:border-b-2 focus:outline-none',
          className,
          {
            'border-red-500 text-red-500 focus:border-red-500':
              touched && errors,
          }
        )}
      />
      <label
        htmlFor={id}
        className={cx(
          'text-hint absolute left-0 -top-1 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:-top-1 peer-focus:text-sm',
          {
            'peer-placeholder-shown:text-red-500 peer-focus:text-red-500':
              touched && errors,
            'peer-placeholder-shown:text-darkText peer-focus:text-darkText': !(
              touched && errors
            ),
          }
        )}
      >
        {placeholder}
      </label>

      <div className='absolute right-0 h-6'>
        {touched && <span className='text-xs text-red-500'>{errors}</span>}
      </div>
    </div>
  );
};
export default React.memo(InputField);
