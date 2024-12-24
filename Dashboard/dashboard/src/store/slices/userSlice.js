// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    clearAllUserErrors: (state) => { /* implementation */ },
    login: (state, action) => { /* implementation */ },
  },
});

export const { clearAllUserErrors, login } = userSlice.actions;
export default userSlice.reducer;
