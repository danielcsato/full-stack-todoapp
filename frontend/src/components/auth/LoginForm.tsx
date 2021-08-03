import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({});

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post('http://localhost:4001/login', formData)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
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

      <Button type="submit" fullWidth variant="contained" color="primary">
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
