import { configureStore } from '@reduxjs/toolkit';
import forgotPasswordReducer from './slices/forgotResetPasswordSlice';
import messageSliceReducer from './slices/messageSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    messages: messageSliceReducer,
  },
});

export default store;
