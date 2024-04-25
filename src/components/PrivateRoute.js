/* Navigate component used to redirect, here we are rendering a component, so we don't want to use a hook. bc it ill be either the outlet OR navigate to 'sign-in' page.
Outlet allows us to render a child elements*/
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';
import Spinner from './Spinner';

const PrivateRoute = () => {
  const { loggedIn, loading } = useAuthStatus();

  if (loading) {
    return <Spinner />;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
