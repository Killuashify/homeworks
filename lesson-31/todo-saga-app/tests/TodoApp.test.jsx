import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TodoForm from "../src/components/TodoForm.jsx";
import TodoList from "../src/components/TodoList.jsx";

const mockStore = configureStore([]);

describe("Todo App Components", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      todos: [
        { id: 1, title: "Test Todo", completed: false },
        { id: 2, title: "Another Todo", completed: true },
      ],
    });
  });

  it("renders TodoForm without crashing", () => {
    render(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    );
  });

  it("renders TodoList without crashing", () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  });
});
