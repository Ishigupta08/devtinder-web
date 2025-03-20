import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userDetail: {},
};

export const userSlice = createSlice({
  name: 'userDetail',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userDetail = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
