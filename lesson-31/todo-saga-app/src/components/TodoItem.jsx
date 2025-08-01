import { useDispatch } from "react-redux";
import {
  DELETE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
} from "../redux/todos/todosActions";
import { useState } from "react";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const handleToggle = () => dispatch({ type: TOGGLE_TODO, payload: todo });

  const handleDelete = () => dispatch({ type: DELETE_TODO, payload: todo.id });

  const handleEdit = () => {
    if (title.trim()) {
      dispatch({ type: EDIT_TODO, payload: { ...todo, title } });
      setIsEditing(false);
    }
  };

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      {isEditing ? (
        <>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleEdit()}
          />
          <button onClick={handleEdit}>💾</button>
        </>
      ) : (
        <>
          <span className={todo.completed ? "completed" : ""}>
            {todo.title}
          </span>
          <button onClick={() => setIsEditing(true)}>✏️</button>
        </>
      )}
      <button onClick={handleDelete}>❌</button>
    </li>
  );
}
