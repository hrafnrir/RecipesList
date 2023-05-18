import { configureStore } from "@reduxjs/toolkit";

import recipes from "./slices/recipesSlice.js";
import {
  localStorageMiddleware,
  resetSearchParamsMiddleware,
} from "./middleware.js";

const store = configureStore({
  reducer: { recipes },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      localStorageMiddleware,
      resetSearchParamsMiddleware
    ),
});

export default store;
