import React from 'react';

interface Props {
  // remove placeholder and add props
  placeholder?: any;
}

const ForgotPasswordPage: React.FC<Props> = function (props: Props) {

  return (
    <div>
      Forgot Password
    </div>
  );
};

export default React.memo(ForgotPasswordPage);
