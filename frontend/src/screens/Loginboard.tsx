import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AuthBox from '../components/auth/AuthBox';
import { LoginScreen, RegisterScreen } from '../Redux/auth/LoginAction';

const Loginboard: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.board}>
      <div className={classes.box}>
        <Button variant="contained" color="primary" onClick={() => dispatch(LoginScreen())}>
          Login
        </Button>
        <Button variant="contained" color="secondary" onClick={() => dispatch(RegisterScreen())}>
          Register
        </Button>
      </div>
      <AuthBox />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  board: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '250px',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '25px',
  },
}));

export default Loginboard;
