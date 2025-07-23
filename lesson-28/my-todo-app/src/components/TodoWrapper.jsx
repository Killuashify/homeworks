import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todoText) => {
    setTodos([...todos, todoText]);
  };

  return (
    <div className="todo-container">
      <h2>📝 TODO List</h2>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoWrapper;
