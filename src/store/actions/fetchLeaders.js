import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "constants";

export const fetchLeaders = createAsyncThunk("request", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(API_URL).then((res) => res.json());
    return response;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});
