import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);

  if (todos.length === 0) return <p>No tasks</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
