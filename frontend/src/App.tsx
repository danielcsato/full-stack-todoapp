import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import Loginboard from './screens/Loginboard';
import PrivateRoute from './util/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" component={Dashboard} exact />
        <Route path="/login" component={Loginboard} />
      </Switch>
    </Router>
  );
}

export default App;
