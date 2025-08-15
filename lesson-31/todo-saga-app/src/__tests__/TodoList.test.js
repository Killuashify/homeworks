import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";
import { Provider } from "react-redux";
import { store } from "../redux/store";

test("renders a todos list", () => {
  render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  expect(screen.getByText(/No tasks/i)).toBeInTheDocument();
});
