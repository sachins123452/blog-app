import { useRoutes } from 'react-router-dom';
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import SamplePage from 'pages/extra-pages/SamplePage';
import ErrorPage from 'pages/extra-pages/ErrorPage';

// import OtherRoutes from './OtherRoute';

// ==============================|| ROUTING RENDER ||============================== //
// const isAuthenticated = true; // Replace with your authentication logic
export default function ThemeRoutes() {
  

  let routes = MainRoutes();
  return useRoutes([
    routes,
    LoginRoutes,
    {
      path: '/*',
      element: <SamplePage />
    },
    {
      path: '/error',
      element: <ErrorPage />
    }
  ]);
}
