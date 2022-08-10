import { configureStore, combineReducers } from "@reduxjs/toolkit";
import initialDataSlice from "store/initiaData/initialDataSlice";

const rootReducer = combineReducers({
  storeData: initialDataSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
