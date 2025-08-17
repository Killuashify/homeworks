import { createAction } from "@reduxjs/toolkit";

export const FETCH_TODOS = createAction("FETCH_TODOS");
export const SET_TODOS = createAction("SET_TODOS");

export const ADD_TODO = createAction("ADD_TODO");
export const ADD_TODO_SUCCESS = createAction("ADD_TODO_SUCCESS");

export const DELETE_TODO = createAction("DELETE_TODO");
export const TOGGLE_TODO = createAction("TOGGLE_TODO");
export const EDIT_TODO = createAction("EDIT_TODO");
export const CLEAR_TODOS = createAction("CLEAR_TODOS");
