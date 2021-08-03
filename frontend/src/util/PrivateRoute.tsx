import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = ({ path, component, exact }) => {
  //TODO
  const isLoggedIn = false;

  return isLoggedIn ? <Route path={path} exact={exact} component={component} /> : <Redirect to="/login" />;
};
export default PrivateRoute;
