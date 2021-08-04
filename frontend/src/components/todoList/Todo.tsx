import React from 'react';
import { ListItem, ListItemIcon, Checkbox, ListItemText, IconButton } from '@material-ui/core';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

const Todo: React.FC = ({}) => {
  return (
    <ListItem role={undefined} dense button>
      <ListItemIcon>
        <Checkbox edge="start" tabIndex={-1} disableRipple />
      </ListItemIcon>
      <ListItemText primary="Todo name" />
      <IconButton edge="end" aria-label="comments">
        <DeleteRoundedIcon />
      </IconButton>
    </ListItem>
  );
};

export default Todo;
