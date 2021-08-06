import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoginScreen } from '../../Redux/auth/LoginAction';
import { TextField, Button, Snackbar, Grid } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios';
import { API_URL } from '../../util/configFile';

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({});
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post(`${API_URL}/register`, formData)
      .then((res) => {
        console.log(res.data);
        dispatch(LoginScreen());
      })
      .catch(() => {
        setOpen(true);
        setError(true);
      });
  };
  return (
    <div>
      <form noValidate onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="first_name"
              variant="outlined"
              required
              fullWidth
              id="first_name"
              label="First Name"
              autoFocus
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="last_name"
              label="Last Name"
              name="last_name"
              autoComplete="lname"
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            />
          </Grid>
        </Grid>
        <Snackbar open={open} autoHideDuration={2000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <Alert severity="error">{error ? 'Failed to register!' : 'Success, please sign in!'}</Alert>
        </Snackbar>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
