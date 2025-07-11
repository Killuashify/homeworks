import { useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [shouldCrash, setShouldCrash] = useState(false);

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput("");
    }
  };

  const deleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <h2>TODO List</h2>

      <form onSubmit={addTodo}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New task"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo, idx) => (
          <li key={idx} className="todo-item">
            <span className="todo-text">{todo}</span>
            <button className="todo-delete" onClick={() => deleteTodo(idx)}>
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
