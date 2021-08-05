import RegisterForm from '../components/auth/RegisterForm';
import LoginForm from '../components/auth/LoginForm';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { RootStore } from '../Redux/Store';
import { LoginScreen, RegisterScreen } from '../Redux/auth/LoginAction';

const Loginboard: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const screen = useSelector((state: RootStore) => state.screen);

  return (
    <div className={classes.board}>
      {screen === '' && (
        <div className={classes.box}>
          <Button variant="contained" color="primary" onClick={() => dispatch(LoginScreen())}>
            Login
          </Button>
          <Button variant="contained" color="secondary" onClick={() => dispatch(RegisterScreen())}>
            Register
          </Button>
        </div>
      )}

      {screen === 'LOGIN' && <LoginForm />}
      {screen === 'REGISTER' && <RegisterForm />}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  board: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '250px',
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default Loginboard;
