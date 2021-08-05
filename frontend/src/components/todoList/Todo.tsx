import React from 'react';
import { ListItem, ListItemIcon, Checkbox, ListItemText, IconButton } from '@material-ui/core';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

const Todo: React.FC<{
  todo: string;
  done: boolean;
  id: string;
  deleteTodo: Function;
  updateTodo: Function;
}> = ({ todo, done, id, deleteTodo, updateTodo }) => {
  return (
    <ListItem role={undefined} dense button>
      <ListItemIcon>
        <Checkbox edge="start" tabIndex={-1} disableRipple checked={done} onClick={() => updateTodo(id)} />
      </ListItemIcon>
      <ListItemText primary={todo} />
      <IconButton edge="end" aria-label="comments" onClick={() => deleteTodo(id)}>
        <DeleteRoundedIcon />
      </IconButton>
    </ListItem>
  );
};

export default Todo;
