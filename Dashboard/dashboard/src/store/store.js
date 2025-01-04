import { configureStore } from '@reduxjs/toolkit';
import forgotPasswordReducer from './slices/forgotResetPasswordSlice';
import messageSliceReducer from './slices/messageSlice';
import projectReducer from './slices/projectSlice';
import skillSliceReducer from './slices/skillSlice';
import SoftwareApplicationReducer from './slices/softwareApplicationSlice';
import timelineReducer from './slices/timelineSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    messages: messageSliceReducer,
    timeline: timelineReducer,
    skill: skillSliceReducer,
    softwareApplications:SoftwareApplicationReducer,
    project: projectReducer,
  },
});

export default store;
