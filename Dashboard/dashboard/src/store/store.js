import { configureStore } from '@reduxjs/toolkit';
import forgotPasswordReducer from './slices/forgotResetPasswordSlice';
import messageSliceReducer from './slices/messageSlice';
import timelineReducer from './slices/timelineSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    messages: messageSliceReducer,
    timeline: timelineReducer,
  },
});

export default store;
