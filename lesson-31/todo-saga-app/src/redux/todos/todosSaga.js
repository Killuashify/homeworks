import { call, put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_TODOS,
  SET_TODOS,
  ADD_TODO,
  ADD_TODO_SUCCESS,
  DELETE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  CLEAR_TODOS,
} from "./todosActions";

const BASE_URL = "https://688c04dccd9d22dda5cbe21a.mockapi.io/todos";

const fetchTodosApi = () => axios.get(BASE_URL);
const addTodoApi = (todo) => axios.post(BASE_URL, todo);
const deleteTodoApi = (id) => axios.delete(`${BASE_URL}/${id}`);
const toggleTodoApi = (todo) =>
  axios.put(`${BASE_URL}/${todo.id}`, { ...todo, completed: !todo.completed });
const editTodoApi = (todo) =>
  axios.put(`${BASE_URL}/${todo.id}`, {
    title: todo.title,
    completed: todo.completed,
  });

function* fetchTodosSaga() {
  try {
    const response = yield call(fetchTodosApi);
    yield put({ type: SET_TODOS, payload: response.data });
  } catch (error) {
    console.error("Fetch todos failed", error);
  }
}

function* addTodoSaga(action) {
  try {
    const response = yield call(addTodoApi, action.payload);
    yield put({ type: ADD_TODO_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Add todo failed", error);
  }
}

function* deleteTodoSaga(action) {
  try {
    yield call(deleteTodoApi, action.payload);
    yield put({ type: FETCH_TODOS });
  } catch (error) {
    console.error("Delete todo failed", error);
  }
}

function* toggleTodoSaga(action) {
  try {
    yield call(toggleTodoApi, action.payload);
    yield put({ type: FETCH_TODOS });
  } catch (error) {
    console.error("Toggle todo failed", error);
  }
}

function* editTodoSaga(action) {
  try {
    yield call(editTodoApi, action.payload);
    yield put({ type: FETCH_TODOS });
  } catch (error) {
    console.error("Edit todo failed", error);
  }
}

function* clearTodosSaga() {
  try {
    const response = yield call(fetchTodosApi);
    const todos = response.data;

    for (const todo of todos) {
      yield call(deleteTodoApi, todo.id);
    }

    yield put({ type: FETCH_TODOS });
  } catch (error) {
    console.error("Clear todos failed", error);
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_TODOS, fetchTodosSaga);
  yield takeEvery(ADD_TODO, addTodoSaga);
  yield takeEvery(DELETE_TODO, deleteTodoSaga);
  yield takeEvery(TOGGLE_TODO, toggleTodoSaga);
  yield takeEvery(EDIT_TODO, editTodoSaga);
  yield takeEvery(CLEAR_TODOS, clearTodosSaga);
}
