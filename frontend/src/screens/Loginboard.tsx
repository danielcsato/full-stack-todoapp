import { useState } from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import LoginForm from '../components/auth/LoginForm';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

const Loginboard = () => {
  const classes = useStyles();
  const [comp, setComp] = useState('');

  const handleChooseForm = (form: string) => {
    setComp(form);
  };

  return (
    <div className={classes.board}>
      {comp === '' && (
        <div className={classes.box}>
          <Button variant="contained" color="primary" onClick={() => handleChooseForm('login')}>
            Login
          </Button>
          <Button variant="contained" color="secondary" onClick={() => handleChooseForm('register')}>
            Register
          </Button>
        </div>
      )}

      {comp === 'login' && <LoginForm />}
      {comp === 'register' && <RegisterForm />}
    </div>
  );
};

export default Loginboard;
