import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { jwtDecode } from "jwt-decode";

// Admin Login
export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    console.log(info);
    try {
      const { data } = await api.post("/admin-login", info, {
        withCredentials: true,
      });
      console.log("Admin Login Response:", data);

      localStorage.setItem("accessToken", data.token);
      return fulfillWithValue(data);
    } catch (error) {
      console.log("Admin Login Error:", error.response?.data);
      return rejectWithValue(error.response?.data);
    }
  }
);

// Seller Login
export const seller_login = createAsyncThunk(
  "auth/seller_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    console.log(info);
    try {
      const { data } = await api.post("/seller-login", info, {
        withCredentials: true,
      });
      console.log("Seller Login Response:", data);

      localStorage.setItem("accessToken", data.token);
      return fulfillWithValue(data);
    } catch (error) {
      console.log("Seller Login Error:", error.response?.data);
      return rejectWithValue(error.response?.data);
    }
  }
);

// Fetch User Info
export const getUserInfo = createAsyncThunk(
  "auth/get_user_info",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get("/get-user", {
        withCredentials: true,
      });
      console.log("User Info Response:", data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log("User Info Error:", error.response?.data);
      return rejectWithValue(error.response?.data);
    }
  }
);

// Seller Register
export const seller_register = createAsyncThunk(
  "auth/seller_register",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    console.log(info);
    try {
      const { data } = await api.post("/seller-register", info, {
        withCredentials: true,
      });
      console.log("Seller Register Response:", data);

      localStorage.setItem("accessToken", data.token);
      return fulfillWithValue(data);
    } catch (error) {
      console.log("Seller Register Error:", error.response?.data);
      return rejectWithValue(error.response?.data);
    }
  }
);

// Decode token to get role
const returnRole = (token) => {
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      console.log("Decoded Token:", decodedToken);

      const expiryTime = new Date(decodedToken.exp * 1000);
      if (expiryTime > new Date()) {
        return decodedToken.role;
      } else {
        localStorage.removeItem("accessToken");
        return null;
      }
    } catch (error) {
      console.error("Token Decoding Error:", error);
      return null;
    }
  }
  return null;
};

// Auth Slice
export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: "",
    role: returnRole(localStorage.getItem("accessToken")),
    token: localStorage.getItem("accessToken"),
  },
  reducers: {
    messageClear: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // Admin Login
      .addCase(admin_login.pending, (state) => {
        state.loader = true;
      })
      .addCase(admin_login.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload?.error || "Something went wrong";
      })
      .addCase(admin_login.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        state.userInfo = payload.user;
        state.token = payload.token;
        state.role = returnRole(payload.token); // Decode token on login
      })

      // Seller Login
      .addCase(seller_login.pending, (state) => {
        state.loader = true;
      })
      .addCase(seller_login.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload?.error || "Something went wrong";
      })
      .addCase(seller_login.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        state.userInfo = payload.user;
        state.token = payload.token;
        state.role = returnRole(payload.token); // Decode token on login
      })

      // Seller Register
      .addCase(seller_register.pending, (state) => {
        state.loader = true;
      })
      .addCase(seller_register.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload?.error || "Something went wrong";
      })
      .addCase(seller_register.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
      })

      // Fetch User Info
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        state.userInfo = payload.userInfo;
      });
  },
});

export const { messageClear } = authReducer.actions;
export default authReducer.reducer;
