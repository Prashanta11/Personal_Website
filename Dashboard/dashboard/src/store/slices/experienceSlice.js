import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const experienceSlice = createSlice({
  name: "experience",
  initialState: {
    loading: false,
    experience: [],
    error: null,
    message: null,
  },
  reducers: {
    getAllExperienceRequest(state, action) {
      state.experience = [];
      state.error = null;
      state.loading = true;
    },
    getAllExperienceSuccess(state, action) {
      state.experience = action.payload;
      state.error = null;
      state.loading = false;
    },
    getAllExperienceFailed(state, action) {
      state.experience = state.experience;
      state.error = action.payload;
      state.loading = false;
    },
    addNewExperienceRequest(state, action) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    addNewExperienceSuccess(state, action) {
      state.error = null;
      state.loading = false;
      state.message = action.payload;
    },
    addNewExperienceFailed(state, action) {
      state.error = action.payload;
      state.loading = false;
      state.message = null;
    },
    deleteExperienceRequest(state, action) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    deleteExperienceSuccess(state, action) {
      state.error = null;
      state.loading = false;
      state.message = action.payload;
    },
    deleteExperienceFailed(state, action) {
      state.error = action.payload;
      state.loading = false;
      state.message = null;
    },
    resetExperienceSlice(state, action) {
      state.error = null;
      state.experience = state.experience;
      state.message = null;
      state.loading = false;
    },
    clearAllErrors(state, action) {
      state.error = null;
      state = state.experience;
    },
  },
});

export const getAllExperience = () => async (dispatch) => {
  dispatch(experienceSlice.actions.getAllExperienceRequest());
  try {
    const response = await axios.get(
      "http://localhost:5000/api/v1/experience/getall",
      { withCredentials: true, headers: { "Content-Type": "application/json" } }
    );
    dispatch(
      experienceSlice.actions.getAllExperienceSuccess(response.data.experience)
    );

    dispatch(experienceSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(
      experienceSlice.actions.getAllExperienceFailed(
        error.response.data.message
      )
    );
  }
};

export const addNewExperience = (data) => async (dispatch) => {
  dispatch(experienceSlice.actions.addNewExperienceRequest());
  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/experience/add",
      data,
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch(
      experienceSlice.actions.addNewExperienceSuccess(response.data.message)
    );
    dispatch(experienceSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(
      experienceSlice.actions.addNewExperienceFailed(
        error.response.data.message
      )
    );
  }
};
export const deleteExperience = (id) => async (dispatch) => {
  dispatch(experienceSlice.actions.deleteExperienceRequest());
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/v1/experience/delete/${id}`,
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch(
      experienceSlice.actions.deleteExperienceSuccess(response.data.message)
    );
    dispatch(experienceSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(
      experienceSlice.actions.deleteExperienceFailed(
        error.response.data.message
      )
    );
  }
};

export const resetExperienceSlice = () => (dispatch) => {
  dispatch(experienceSlice.actions.resetExperienceSlice());
};

export const clearAllExperienceErrors = () => (dispatch) => {
  dispatch(experienceSlice.actions.clearAllErrors());
};

export default experienceSlice.reducer;
