import {Layout} from 'antd';
import React, { Suspense, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import SideBar from './components/SideBar';
import { User } from '../../entities/User';
import { localStorageService } from '../../services/LocalStorageService';
import LoadingPage from '../Loading.page';

interface Props {
  me?: User | undefined;
  error?: any;
  fetchMeAction?: any;
}

const SettingsLazy = React.lazy(() => import('./Settings/Settings.page'));
const DashboardLazy = React.lazy(() => import('./Dashboard/Dashboard.page'));

const App: React.FC<Props> = function (props: Props) {
  const { me, error, fetchMeAction } = props;
  const authToken = localStorageService.getAuthToken();

  const navigate = useNavigate();
  useEffect(() => {
    if (!authToken) {
      // navigate('/auth');
    } else if (!me) {
      fetchMeAction();
    }
  }, [me, error, navigate, fetchMeAction, authToken]);
  return (
        <Layout className={'w-full h-screen'}>
          <SideBar />
          <div className='w-full bg-white overflow-auto'>
            <Suspense fallback={<LoadingPage />}>
              <Routes>
                <Route
                    path='/'
                    element={<Navigate replace to='settings' />}
                />
                <Route path='settings/*' element={<SettingsLazy />} />
                <Route path='dashboard/*' element={<DashboardLazy />} />
              </Routes>
            </Suspense>
          </div>
        </Layout>
  );
};

App.defaultProps = {};

export default React.memo(App);
