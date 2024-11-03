import { createSlice } from "@reduxjs/toolkit";
import userReduxInit from "./userReduxInit";

export const userReduxSlice = createSlice({
  name: "user",
  initialState: userReduxInit,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setUserToken: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserToken, setUser } = userReduxSlice.actions;

export default userReduxSlice.reducer;
