import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feed: [],
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    addFeed: (state, action) => {
      state.feed = action.payload;
    },
    removeFeed: (state, action) => {
      state.feed = state.feed.filter((user) => user._id !== action.payload);
    },
  },
});

export const { addFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;
