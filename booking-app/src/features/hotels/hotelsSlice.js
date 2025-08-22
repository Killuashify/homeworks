import { createSlice } from "@reduxjs/toolkit";

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    setHotels(state, action) {
      state.list = action.payload;
      state.loading = false;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setHotels, setLoading } = hotelsSlice.actions;
export default hotelsSlice.reducer;
