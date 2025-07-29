import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1>TODO</h1>
      <TodoForm />
      <h2>TODOS</h2>
      <TodoList />
    </div>
  );
};

export default App;
