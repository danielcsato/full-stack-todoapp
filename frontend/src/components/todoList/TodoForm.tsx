import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { API_URL } from '../../util/configFile';
import TodoList from './TodoList';
import axios from 'axios';

const TodoForm = () => {
  const [name, setName] = useState('');
  const classes = useStyles();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    /*  event.preventDefault();
    axios
      .post(`${API_URL}/login`, formData)
      .then(() => {})
      .catch(() => setOpen(true)); */
  };

  return (
    <div className={classes.root}>
      <div className={classes.formHolder}>
        <form noValidate onSubmit={(e) => onSubmit(e)}>
          <div className={classes.inputs}>
            <TextField required value={name} label="Todo Name" variant="outlined" onChange={(e) => setName(e.target.value)} />
            <Button type="submit" variant="outlined" color="primary">
              ADD
            </Button>
          </div>
        </form>
        <TodoList />
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: { display: 'flex', justifyContent: 'center' },
  formHolder: {
    width: '500px',
    border: '1px solid black',
  },
  inputs: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '15px',
  },
}));

export default TodoForm;
