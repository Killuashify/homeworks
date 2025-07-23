const TodoList = ({ todos }) => {
  if (!todos.length)
    return (
      <p style={{ marginTop: "1rem", color: "#666" }}>The list empty 💤</p>
    );

  return (
    <ul className="todo-list">
      {todos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default TodoList;
