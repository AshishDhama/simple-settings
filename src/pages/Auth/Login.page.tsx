import React from 'react';

interface Props {
  // remove placeholder and add props
  placeholder?: any;
}

const LoginPage: React.FC<Props> = function (props: Props) {

  return (
    <div>
      Login Page
    </div>
  );
};

export default React.memo(LoginPage);
