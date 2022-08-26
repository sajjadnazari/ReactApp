import React from "react";
import TodoItem from "./TodoItem";
const TodoList = (props) => {
  const todoItems = props.todos.map((todo) => {
    return <TodoItem title={todo.title} key={todo.id} />;
  });

  return <ul>{todoItems}</ul>;
};

export default TodoList;
