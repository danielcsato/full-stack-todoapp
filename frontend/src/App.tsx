import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import Loginboard from './screens/Loginboard';
import PrivateRoute from './util/PrivateRoute';

import { makeStyles } from '@material-ui/core/styles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Switch>
          <PrivateRoute path="/" component={Dashboard} exact />
          <Route path="/login" component={Loginboard} />
        </Switch>
      </Router>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    '*': {
      margin: 0,
      padding: 0,
    },
  },
}));

export default App;
