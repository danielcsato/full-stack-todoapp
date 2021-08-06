import React, { useState } from 'react';
import { API_URL } from '../../util/configFile';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { login } from '../../Redux/auth/LoginAction';
import { TextField, Button, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({});
  const [open, setOpen] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post(`${API_URL}/login`, formData)
      .then((res) => {
        dispatch(login());
        console.log(JSON.stringify(res.data));
        window.sessionStorage.setItem('user', res.data.token);
        history.push('/');
      })
      .catch(() => setOpen(true));
  };

  return (
    <form noValidate onSubmit={(e) => onSubmit(e)}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
      />
      <Snackbar open={open} autoHideDuration={2000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity="error">Login failed!</Alert>
      </Snackbar>
      <Button type="submit" fullWidth variant="contained" color="primary">
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
