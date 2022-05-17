import cx from 'classnames';
import React from 'react';

interface Props {
  title: string;
  className?: any;
}

const Tag: React.FC<Props> = function (props: Props) {
  const { title, className } = props;
  return (
    <div
      className={cx('mx-1 mb-1 w-fit rounded px-2 py-1 text-white', className)}
    >
      {title}
    </div>
  );
};

Tag.defaultProps = {};

export default React.memo(Tag);
