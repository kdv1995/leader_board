import { configureStore, combineReducers } from "@reduxjs/toolkit";
import countSlice from "store/count/countSlice";

const rootReducer = combineReducers({
  count: countSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
