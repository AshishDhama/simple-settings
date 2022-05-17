import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoadingPage from './pages/Loading.page';
import NotFound from './pages/NotFound.page';
import { localStorageService } from './services/LocalStorageService';
import './global-styles/index.scss';


const AuthPageLazy = React.lazy(() => import('./pages/Auth/Auth.page'));
const AppLazy = React.lazy(() => import('./pages/App/App.page'));
const authToken = localStorageService.getAuthToken();

ReactDOM.render(
  <React.StrictMode>
      <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={<Navigate replace to={authToken ? '/auth' : '/app'} />}
            />
            <Route path='auth/*' element={<AuthPageLazy />} />
            <Route path='app/*' element={<AppLazy />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
      </BrowserRouter>
      </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
