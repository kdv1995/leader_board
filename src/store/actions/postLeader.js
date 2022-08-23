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
