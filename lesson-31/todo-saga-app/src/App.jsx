// src/App.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_TODOS, CLEAR_TODOS } from "./redux/todos/todosActions";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch({ type: FETCH_TODOS });
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1>Redux-Saga TODO</h1>
      <TodoForm />
      <TodoList />
      <footer>
        <p>Total number: {todos.length}</p>
        <button onClick={() => dispatch({ type: CLEAR_TODOS })}>
          Clear all
        </button>
      </footer>
    </div>
  );
}
