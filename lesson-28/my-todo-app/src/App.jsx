import React from "react";
import TodoForm from "./components/TodoForm";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <TodoForm />
    </div>
  );
};

export default App;
