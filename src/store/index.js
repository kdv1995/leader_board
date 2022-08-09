import { configureStore, combineReducers } from "@reduxjs/toolkit";
import countSlice from "store/count/countSlice";
import initialDataSlice from "store/initiaData/initialDataSlice";

const rootReducer = combineReducers({
  count: countSlice,
  data: initialDataSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
