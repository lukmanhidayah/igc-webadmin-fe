// selectors.ts
import { createSelector } from "reselect";
import { RootState } from "../store";

// Simple selector to get the counter value from state
const userSelector = (state: RootState) => state.user;

// Memoized selector using `createSelector`
export const selectToken = createSelector(
  [userSelector], // Input selectors
  (dashboard) => dashboard.token // Output function
);

// Memoized selector using `createSelector`
export const selectFullName = createSelector(
  [userSelector], // Input selectors
  (dashboard) => dashboard.fullName // Output function
);

// Memoized selector using `createSelector`
export const selectEmail = createSelector(
  [userSelector], // Input selectors
  (dashboard) => dashboard.email // Output function
);
