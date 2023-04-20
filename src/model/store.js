import { configureStore } from "@reduxjs/toolkit";

import recipes from "./slices/recipesSlice.js";
import { localStorageMiddleware } from "./middleware.js";

const store = configureStore({
  reducer: { recipes },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
