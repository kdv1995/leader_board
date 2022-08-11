import { configureStore, combineReducers } from "@reduxjs/toolkit";
import leaderSlice from "store/leadersSlice/leadersSlice";

const rootReducer = combineReducers({
  leaders: leaderSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
