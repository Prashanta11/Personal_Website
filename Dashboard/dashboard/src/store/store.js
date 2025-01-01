import { configureStore } from '@reduxjs/toolkit';
import forgotPasswordReducer from './slices/forgotResetPasswordSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
  },
});

export default store;
