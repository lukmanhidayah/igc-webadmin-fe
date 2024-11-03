import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./dashboard/dashboardReduxReducer";
import userReducer from "./user/userReduxReducer";
import languageReduxReducer from "./language/languageReduxReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "dashboard", "language"], // Only persist the auth state
};

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  user: userReducer,
  language: languageReduxReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable state check for persist
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
