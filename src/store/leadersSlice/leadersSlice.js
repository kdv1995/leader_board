/* eslint-disable no-confusing-arrow */
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
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
      const scoreToNumber = Number(score);
      state.data = state.data
        .map((user) => {
          if (user.id === id && user.name === name) {
            return { ...user, name: name, score: scoreToNumber };
          }
          return user;
        })
        .sort((a, b) => b.score - a.score);
    },
    setAddNewUser: (state, action) => {
      state.data = state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asynchrononousRequest.fulfilled, (state, { payload }) => {
      state.data = payload
        .map((item) => ({
          ...item,
          name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
          id: nanoid(),
        }))
        .map((item) => (item.score ? item : { ...item, score: 0 }))
        .sort((a, b) => b.score - a.score);
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
export const { setEditUserScore, setAddNewUser } = initialDataSlice.actions;
