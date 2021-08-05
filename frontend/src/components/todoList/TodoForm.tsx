import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import { API_URL } from '../../util/configFile';
import TodoList from './TodoList';
import axios from 'axios';

const TodoForm: React.FC = () => {
  const [name, setName] = useState('');
  const [todos, setTodos] = useState([]);

  const classes = useStyles();

  const token = window.sessionStorage.getItem('user');
  const config = {
    headers: {
      'x-access-token': `${token}`,
    },
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = { todo: name, done: false, id: uuidv4() };

    axios
      .post(`${API_URL}/todo/add`, formData, config)
      .then(() => {
        fetchTodos();
        setName('');
      })
      .catch((err) => console.log(err));
  };

  const fetchTodos = () => {
    axios
      .get(`${API_URL}/todos`, config)
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  };

  const deleteTodo = (id: string) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => fetchTodos())
      .catch((err) => console.log(err));
  };

  const updateTodo = (id: string) => {
    axios
      .post(`${API_URL}/todo/${id}`)
      .then(() => {
        fetchTodos();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <TodoList deleteTodo={deleteTodo} updateTodo={updateTodo} todos={todos} />
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
