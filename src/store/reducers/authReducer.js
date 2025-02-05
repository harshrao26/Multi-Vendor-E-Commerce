import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    suceessMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: "",
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: {
    // Add extra reducers here
  },
});
export default authReducer.reducer;