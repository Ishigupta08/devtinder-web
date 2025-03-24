import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  request: [],
};

export const feedSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    getRequest: (state, action) => {
      state.request = action.payload;
    },
    removeRequest: (state, action) => {
      state.request = state.request.filter((user) => user._id !== action.payload);
    },
  },
});

export const { getRequest, removeRequest } = feedSlice.actions;
export default feedSlice.reducer;
