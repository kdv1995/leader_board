import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialDataSlice = createSlice({
  name: "initialDataSlice",
  initialState: {
    data: [],
  },
  reducers: {
    setData: (state, { payload }) => {
      state.data = payload.map((item) => (item.score ? item : { ...item, score: 0 }));
    },
  },
});

export default initialDataSlice.reducer;
export const { setData } = initialDataSlice.actions;

export function fetchItems() {
  return async (dispatch) => {
    axios
      .get("http://coding-test.cube19.io/frontend/v1/starting-state")
      .then((response) => dispatch(setData(response.data)));
    try {
      console.log("Successful");
    } catch (error) {
      console.log(error);
    }
  };
}
