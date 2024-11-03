// selectors.ts
import { createSelector } from "reselect";
import { RootState } from "../store";

// Simple selector to get the counter value from state
const languageSelector = (state: RootState) => state.language;

// select language value
export const selectLanguage = createSelector(
  [languageSelector], // Input selectors
  (language) => language.value // Output function
);
