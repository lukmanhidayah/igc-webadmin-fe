import { createSlice } from "@reduxjs/toolkit";
import languageReduxInit from "./languageReduxInit";
import i18n from "i18next"; // Import i18n

export const languageReduxSlice = createSlice({
  name: "language",
  initialState: languageReduxInit,
  reducers: {
    setLanguage: (state, action) => {
      state.value = action.payload;
      i18n.changeLanguage(action.payload); // Ubah bahasa di i18next
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLanguage } = languageReduxSlice.actions;

export default languageReduxSlice.reducer;
