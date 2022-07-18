import React from 'react';

import Todo from './Todo';

const TodoList = ({ todos, setTodos, filtTodos }) => {
  return (
    <div className="todo-containes">
      <ul className="todo-list">
        {filtTodos.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
