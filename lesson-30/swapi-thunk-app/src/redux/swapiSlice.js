import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacter = createAsyncThunk(
  "swapi/fetchCharacter",
  async (id) => {
    const res = await axios.get(`https://swapi.py4e.com/api/people/${id}`);
    return res.data;
  }
);

const swapiSlice = createSlice({
  name: "swapi",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearData: (state) => {
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCharacter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearData } = swapiSlice.actions;
export default swapiSlice.reducer;
