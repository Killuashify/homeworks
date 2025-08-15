import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoForm from "../components/TodoForm";
import { Provider } from "react-redux";
import { store } from "../redux/store";

test("adding a new todo", () => {
  render(
    <Provider store={store}>
      <TodoForm />
    </Provider>
  );

  const input = screen.getByPlaceholderText(/New task/i);
  fireEvent.change(input, { target: { value: "New task" } });

  expect(input.value).toBe("New task");
});
