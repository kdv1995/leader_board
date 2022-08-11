import { createSlice } from "@reduxjs/toolkit";

const initialDataSlice = createSlice({
  name: "leadersSlice",
  initialState: {
    data: [],
  },
  reducers: {
    setData: (state, { payload }) => {
      state.data = payload
        .map((item) => (item.score ? item : { ...item, score: 0 }))
        .map((item) => ({ ...item, name: item.name.charAt(0).toUpperCase() + item.name.slice(1) }))
        .sort((a, b) => b.score - a.score)
        .map((item, index) => ({ ...item, rank: index + 1 }));
    },
  },
});

export default initialDataSlice.reducer;
export const { setData } = initialDataSlice.actions;
