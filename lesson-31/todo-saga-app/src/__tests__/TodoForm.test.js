import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoForm from "../components/TodoForm";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../redux/todos/todosSlice";

const store = configureStore({
  reducer: { todos: todosReducer },
  preloadedState: { todos: [] },
});

test("updates input value when typing", () => {
  render(
    <Provider store={store}>
      <TodoForm />
    </Provider>
  );

  const input = screen.getByPlaceholderText(/New task/i);
  fireEvent.change(input, { target: { value: "New task" } });

  expect(input.value).toBe("New task");
});

test("submits the form and clears input", () => {
  render(
    <Provider store={store}>
      <TodoForm />
    </Provider>
  );

  const input = screen.getByPlaceholderText(/New task/i);
  const button = screen.getByRole("button", { name: /Add/i });

  fireEvent.change(input, { target: { value: "New task" } });
  fireEvent.click(button);

  expect(input.value).toBe("");
});
