// selectors.ts
import { createSelector } from "reselect";
import { RootState } from "../store";

// Simple selector to get the counter value from state
const dashboardSelector = (state: RootState) => state.dashboard;

// Memoized selector using `createSelector`
export const selectSidebar = createSelector(
  [dashboardSelector], // Input selectors
  (dashboard) => dashboard.sidebar // Output function
);
