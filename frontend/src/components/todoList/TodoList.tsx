import React from 'react';
import Todo from './Todo';

const TodoList: React.FC<{
  todos: Array<any>;
  updateTodo: Function;
  deleteTodo: Function;
}> = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <div>
      {todos.map(({ todo, id, done, _id }) => (
        <Todo key={id} id={_id} todo={todo} done={done} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
