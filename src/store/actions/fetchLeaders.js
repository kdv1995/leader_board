import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from 'constants';

export const postLeader = createAsyncThunk('postLeader', async (user, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_URL}/process-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: user.name }),
    });
    return response.json();
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});
export const fetchLeaders = createAsyncThunk('fetchLeaders', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_URL}/starting-state`).then((res) => res.json());
    return response;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});
