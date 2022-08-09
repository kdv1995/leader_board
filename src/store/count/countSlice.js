import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state) {
      state.count += 1;
    },
  },
});

export default countSlice.reducer;
export const { increment } = countSlice.actions;
