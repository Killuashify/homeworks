import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "../App";

const mockStore = configureStore([]);
const store = mockStore({
  todos: [],
});

describe("App component", () => {
  test("renders the application title", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText(/Redux-Saga TODO/i)).toBeInTheDocument();
  });

  test("renders footer with total todos", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText(/Total number: 0/i)).toBeInTheDocument();
  });
});
