import React from 'react';

interface Props {
  className?: string;
}

const LineSeparator: React.FC<Props> = function (props: Props) {
  const { className } = props;
  return (
    <hr
      className={` mb-5 h-0.5 w-full self-center bg-gray-200  ${className}`}
    />
  );
};

LineSeparator.defaultProps = {};

export default React.memo(LineSeparator);
