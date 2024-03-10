import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { BASE_URI, PATH_CONSTANTS } from './Contants';
import LoginPage from '../Containers/LoginPage/LoginPage';
import LandingPage from '../Containers/LandingPage/LandingPagev1';
import ErrorPage from '../Components/Error/Error';
import UserDashboard from '../Containers/Dashboard/UserDashboard';

export const router = createBrowserRouter([
  {
    path: `/`,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: `/`,
        element: <LandingPage />,
        errorElement: <ErrorPage />
      },
      {
        path: `/${BASE_URI}/${PATH_CONSTANTS.DASHBOARD}/${PATH_CONSTANTS.USER}`,
        element: <UserDashboard />,
        errorElement: <ErrorPage />
      }
    ]
  },
  {
    path: `/${BASE_URI}/auth/user/authentication/login`,
    element: <LoginPage />,
    errorElement: <ErrorPage />
  }
]);
