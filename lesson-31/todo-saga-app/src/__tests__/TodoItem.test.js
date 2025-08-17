import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TodoItem from "../components/TodoItem";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../redux/todos/todosSlice";

const store = configureStore({
  reducer: { todos: todosReducer },
  preloadedState: { todos: [] },
});

test("renders one todo", () => {
  const todo = { id: "1", title: "Test task", completed: false };

  render(
    <Provider store={store}>
      <TodoItem todo={todo} />
    </Provider>
  );

  expect(screen.getByText(/Test task/i)).toBeInTheDocument();
});
