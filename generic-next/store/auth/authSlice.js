import { register } from "../../pages/api/auth";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  authenticated: true,
  established: false,
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (name, email, password) => {
    const credentials = await register(name, email, password);
    return credentials;
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducer: {},
});

export default authSlice.reducer;
