import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TodoItem from "../components/TodoItem";
import { Provider } from "react-redux";
import { store } from "../redux/store";

test("render of one todo", () => {
  const todo = { id: 1, title: "Test task", completed: false };

  render(
    <Provider store={store}>
      <TodoItem todo={todo} />
    </Provider>
  );

  expect(screen.getByText(/Test task/i)).toBeInTheDocument();
});
