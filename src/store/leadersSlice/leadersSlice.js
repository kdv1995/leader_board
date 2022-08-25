/* eslint-disable no-restricted-syntax */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';
import { fetchLeaders } from 'store/actions/fetchLeaders';
import { postLeader } from 'store/actions/postLeader';

const initialDataSlice = createSlice({
  name: 'leadersSlice',
  initialState: {
    data: [],
    fetching: false,
    error: null,
  },
  reducers: {
    setEditUserScore: (state, { payload }) => {
      const { id, name, score, previousPosition } = payload;
      const scoreToNumber = Number(score);
      state.data = state.data
        .map((user) => {
          if (user.id === id && user.name === name) {
            return {
              ...user,
              name: name,
              score: scoreToNumber,
            };
          }
          return user;
        })
        .sort((a, b) => b.score - a.score)
        .map((user, index) => {
          const currentIndex = index + 1;
          if (user.id === id) {
            return {
              ...user,
              difference:
                previousPosition > currentIndex
                  ? previousPosition - currentIndex
                  : previousPosition - currentIndex,
              place: currentIndex,
            };
          }
          return {
            ...user,
            place: currentIndex,
            difference: user.place === currentIndex ? 'No change' : user.place - currentIndex,
          };
        });
    },
    setAddNewUser: (state, { payload }) => {
      const { id, score, name, difference } = payload;
      const scoreToNumber = Number(score);
      state.data.push({ id: id, name: name, score: scoreToNumber, difference: difference });
      state.data = state.data
        .sort((a, b) => b.score - a.score)
        .map((item, currentIndex) => ({ ...item, place: currentIndex + 1 }));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLeaders.pending, (state) => {
      state.fetching = true;
    });
    builder.addCase(fetchLeaders.fulfilled, (state, { payload }) => {
      state.data = payload
        .map((item) => ({
          ...item,
          name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
          id: nanoid(),
          difference: 'No change',
          score: item.score ? item.score : 0,
        }))
        .sort((a, b) => b.score - a.score)
        .map((item, currentIndex) => ({ ...item, place: currentIndex + 1 }));

      state.fetching = false;
    });
    builder.addCase(fetchLeaders.rejected, (state, { payload, error }) => {
      if (payload) {
        state.error = payload.errorMessage;
      } else {
        state.error = error.message;
      }
      state.fetching = false;
    });

    builder.addCase(postLeader.pending, (state) => {
      state.fetching = true;
    });
    builder.addCase(postLeader.fulfilled, (state, action) => {
      state.fetching = action.payload;
    });
    builder.addCase(postLeader.rejected, (state, { payload, error }) => {
      if (payload) {
        state.error = payload.errorMessage;
      } else {
        state.error = error.message;
      }
      state.fetching = false;
    });
  },
});

export default initialDataSlice.reducer;
export const { setEditUserScore, setAddNewUser } = initialDataSlice.actions;
