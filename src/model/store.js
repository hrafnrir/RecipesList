import { configureStore } from "@reduxjs/toolkit";

import recipes from "./slices/recipesSlice.js";
import app from "./slices/appSlice.js";
import { localStorageMiddleware } from "./middleware.js";

const store = configureStore({
  reducer: { app, recipes },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
