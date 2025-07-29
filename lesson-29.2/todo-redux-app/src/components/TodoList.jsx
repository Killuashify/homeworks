import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <hr />
      {todos.map((todo, index) => (
        <div key={index} className="todo-item">
          {todo}
        </div>
      ))}
      <p>Total: {todos.length}</p>
    </div>
  );
};

export default TodoList;
