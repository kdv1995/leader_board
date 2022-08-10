import { createSlice } from "@reduxjs/toolkit";

const initialDataSlice = createSlice({
  name: "initialDataSlice",
  initialState: {
    data: [],
  },
  reducers: {
    setData: (state, { payload }) => {
      state.data = payload
        .map((item) => (item.score ? item : { ...item, score: 0 }))
        .map((item, index) => ({ ...item, rank: item.score }))
        .map((item) => ({ ...item, name: item.name.charAt(0).toUpperCase() + item.name.slice(1) }))
        .sort((a, b) => b.score - a.score);
    },
  },
});

export default initialDataSlice.reducer;
export const { setData } = initialDataSlice.actions;
