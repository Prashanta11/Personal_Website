import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the async thunk for login
export const login = createAsyncThunk('user/login', async ({ email, password }, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/v1/user/login",
      { email, password },
      { withCredentials: true, headers: { "Content-Type": "application/json" } }
    );
    return data.user;
  } catch (error) {
    if (error.response && error.response.data) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    user: {},
    isAuthenticated: false,
    error: null,
    message: null,
    isUpdated: false,
  },
  reducers: {
    clearAllErrors(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.isAuthenticated = false;
        state.user = {};
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = {};
        state.error = action.payload;
      });
  },
});

export const { clearAllErrors } = userSlice.actions;
export default userSlice.reducer;