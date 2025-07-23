import React from "react";
import TodoWrapper from "./components/TodoWrapper";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <TodoWrapper />
    </div>
  );
};

export default App;
