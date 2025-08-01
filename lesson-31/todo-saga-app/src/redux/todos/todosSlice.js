import { createSlice } from "@reduxjs/toolkit";
import { SET_TODOS, ADD_TODO_SUCCESS } from "./todosActions";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SET_TODOS, (state, action) => action.payload)
      .addCase(ADD_TODO_SUCCESS, (state, action) => {
        state.push(action.payload);
      });
  },
});

export default todosSlice.reducer;
