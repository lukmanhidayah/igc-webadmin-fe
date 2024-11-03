import { createSlice } from "@reduxjs/toolkit";
import dashboardInit from "./dashboardReduxInit";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: dashboardInit,
  reducers: {
    setDashboard: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setSidebar: (state, action) => {
      return {
        ...state,
        sidebar: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSidebar, setDashboard } = dashboardSlice.actions;

export default dashboardSlice.reducer;
