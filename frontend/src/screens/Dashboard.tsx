import React from 'react';
import { Button } from '@material-ui/core';
import TodoForm from '../components/todoList/TodoForm';
import { useHistory } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const history = useHistory();

  const handleLogout = () => {
    window.sessionStorage.clear();
    history.push('/auth');
  };

  return (
    <div>
      <Button onClick={() => handleLogout()}>Logout</Button>
      <TodoForm />
    </div>
  );
};

export default Dashboard;
