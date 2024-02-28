import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import ForgotPassword from 'pages/authentication/ForgotPassword';
// import { Navigate } from 'react-router-dom';
// import DashboardDefault from 'pages/dashboard/index';
// import MainLayout from 'layout/MainLayout/index';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));

// ==============================|| AUTH ROUTING ||============================== //
// const isAuthenticated = true; // Replace with your authentication logic

const LoginRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: 'login',
      element: <AuthLogin />,

    },
    {
      path: 'register',
      element: <AuthRegister />
    },
    {
      path: 'forgotPassword',
      element: <ForgotPassword/>
    }
  
  ]
};

export default LoginRoutes;
