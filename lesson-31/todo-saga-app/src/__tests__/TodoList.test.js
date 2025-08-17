import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../redux/todos/todosSlice";
import TodoList from "../components/TodoList";

function renderWithStore(preloadedState = { todos: [] }) {
  const store = configureStore({
    reducer: { todos: todosReducer },
    preloadedState,
  });

  return render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

describe("TodoList", () => {
  test("renders empty list message", () => {
    renderWithStore({ todos: [] });
    expect(screen.getByText(/no tasks/i)).toBeInTheDocument();
  });

  test("renders list with one todo", () => {
    const todo = { id: "1", title: "Test task", completed: false };
    renderWithStore({ todos: [todo] });
    expect(screen.getByText(/test task/i)).toBeInTheDocument();
  });
});
