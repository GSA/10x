import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import context from "./context";

export const initialState = {
  pending: false,
  error: null,
  data: [],
};

export const getSettings = createAsyncThunk(
  "settings/getSettings",
  async (props = {}) => await context.getSettings(props)
);

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: {
    [getSettings.pending]: (state) => ({ ...initialState, pending: true }),
    [getSettings.fulfilled]: (state, action) => ({
      ...initialState,
      data: action.payload,
    }),
    [getSettings.rejected]: (state, action) => ({
      ...initialState,
      error: action.error,
    }),
  },
});

export const { reset } = settingsSlice.actions;

export default settingsSlice.reducer;
