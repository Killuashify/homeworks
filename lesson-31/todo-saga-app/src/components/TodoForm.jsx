// src/components/TodoForm.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../redux/todos/todosActions";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch({
      type: ADD_TODO.type,
      payload: { title },
    });

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
      />
      <button type="submit">ADD</button>
    </form>
  );
}
