import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootStore } from '../Redux/Store';

const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = ({ path, component, exact }) => {
  const isLogged = useSelector((state: RootStore) => state.isLogged);

  return isLogged || window.sessionStorage.getItem('user') ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/login" />
  );
};
export default PrivateRoute;
