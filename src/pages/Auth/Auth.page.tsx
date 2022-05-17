import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './Login.page';
import ForgotPasswordPage from './ForgotPassword.page';
import { User } from '../../entities/User';
import { localStorageService } from '../../services/LocalStorageService';
interface Props {
  me?: User | undefined;
}

const Auth: React.FC<Props> = function (props: Props) {
  const { me } = props;
  const authToken = localStorageService.getAuthToken();

  const navigate = useNavigate();
  useEffect(() => {
    console.log('Use Effect', authToken, me);
    if (authToken || me) {
      navigate('/app');
    }
  }, [me, navigate, authToken]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='login' />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='forgot-password' element={<ForgotPasswordPage />} />
      </Routes>
    </div>
  );
};

Auth.defaultProps = {};

export default React.memo(Auth);
