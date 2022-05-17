import React, { TextareaHTMLAttributes } from 'react';
import cx from 'classnames';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  inputClasses?: string;
  labelClasses?: string;
  labelSuffix?: string;
  errors?: string;
  touched?: boolean;
  mandatory?: boolean;
  className?: string;
}

const TextArea: React.FC<Props> = function (props) {
  const {
    label,
    inputClasses,
    labelClasses,
    labelSuffix,
    touched,
    errors,
    mandatory,
    className,
    ...rest
  } = props;
  return (
    <div className={cx('w-full', className)}>
      <div className='flex w-full flex-col items-start'>
        {label && (
          <label
            htmlFor={rest.id}
            className={cx('block  font-medium text-gray-500', labelClasses)}
          >
            {label}
            {mandatory ? '*' : ''}
            {labelSuffix}
          </label>
        )}
        <textarea
          {...rest}
          className={cx(
            'mt-1 w-full rounded-md bg-transparent py-1.5 px-2 shadow-sm',
            'border-2 border-gray-300',
            'focus:border-gray-400 focus:outline-none',
            inputClasses
          )}
        />
        <div className='px-1 text-xs text-red-600'>
          {touched && <span>{errors}</span>}
        </div>
      </div>
    </div>
  );
};

TextArea.defaultProps = {
  errors: '',
  mandatory: false,
  labelClasses: '',
  labelSuffix: ' :',
};

export default React.memo(TextArea);
