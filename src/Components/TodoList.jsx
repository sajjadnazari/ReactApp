import React from "react";

import TodoItem from "./TodoItem";

function TodoList(props) {
  const todoItems = props.todos.map((todo) => {
    return <TodoItem title={todo.title} key={todo.id} />;
  });

  return <div className="todo-list">{todoItems}</div>;
}

export default TodoList;
