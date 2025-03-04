import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    console.log(info);
    try {
      const { data } = await api.post("/admin-login", info, {
        withCredentials: true,
      });
      localStorage.setItem("userInfo", data.token);
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error, error.response.data);
    }
  }
);

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    suceessMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: "",
  },
  reducers: {
    // login: (state, action) => {
    //   state.user = action.payload;
    // },
    // logout: (state) => {
    //   state.user = null;
    // },
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.suceessMessage = "";
    },
  },
  extraReducers: (builder) => {
    // Add extra reducers here
    builder
      .addCase(admin_login.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(admin_login.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.message;
        state.userInfo = payload.user;
      })
      .addCase(admin_login.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.suceessMessage = payload.message;
        state.userInfo = payload.user;
      });
  },
});
export const { messageClear } = authReducer.actions;
export default authReducer.reducer;
