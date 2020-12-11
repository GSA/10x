import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import context from "./context";

export const initialState = {
  pending: false,
  error: null,
  data: [],
  footers: [],
};

export const getSettings = createAsyncThunk(
  "settings/getSettings",
  async (props = {}) => await context.getSettings(props)
);

export const getFooterList = createAsyncThunk(
  "settings/getFooterList",
  async (props = {}) => await context.getFooter(props)
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
      pending: false,
    }),
    [getSettings.rejected]: (state, action) => ({
      ...initialState,
      error: action.error,
      pending: false,
    }),
    [getFooterList.pending]: (state) => ({ ...initialState, pending: true }),
    [getFooterList.fulfilled]: (state, action) => ({
      ...initialState,
      footers: action.payload,
      pending: false,
    }),
    [getFooterList.rejected]: (state, action) => ({
      ...initialState,
      error: action.error,
    }),
    pending: false,
  },
});

export const { reset } = settingsSlice.actions;

export default settingsSlice.reducer;
