import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import todosReducer from "./todos/todosSlice";
import rootSaga from "./todos/todosSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(saga),
});

saga.run(rootSaga);
