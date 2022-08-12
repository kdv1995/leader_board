import { createSlice } from "@reduxjs/toolkit";
import { asynchrononousRequest } from "store/actions/setData";

const initialDataSlice = createSlice({
  name: "leadersSlice",
  initialState: {
    data: [],
    fetching: false,
    error: null,
  },
  reducers: {
    setEditUserScore: (state, { payload }) => {
      const { id, name, score } = payload;
      console.log(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asynchrononousRequest.fulfilled, (state, { payload }) => {
      state.data = payload
        .map((item) => (item.score ? item : { ...item, score: 0 }))
        .map((item) => ({ ...item, name: item.name.charAt(0).toUpperCase() + item.name.slice(1) }))
        .sort((a, b) => b.score - a.score)
        .map((item, index) => ({ ...item, rank: index + 1, id: index + 1 }));
      state.fetching = false;
    });
    builder.addCase(asynchrononousRequest.rejected, (state, { payload, error }) => {
      if (payload) {
        state.error = payload.errorMessage;
      } else {
        state.error = error.message;
      }
      state.fetching = false;
    });
    builder.addCase(asynchrononousRequest.pending, (state, { payload }) => {
      state.fetching = true;
    });
  },
});

export default initialDataSlice.reducer;
export const { setEditUserScore } = initialDataSlice.actions;
