import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from 'constants';

export const postLeader = createAsyncThunk('postLeader', async (_, { rejectWithValue }) => {
  try {
    const leader = { username: 'the username entered' };
    const response = await fetch(`${API_URL}/process-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leader),
    });
    return response;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});
export const fetchLeaders = createAsyncThunk('fetchLeader', async (_, { rejectWithValue }) => {
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
