import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import recipes from "./slices/recipesSlice.js";
import app from "./slices/appSlice.js";
import { rootSaga } from "./sagas/sagas.js";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { app, recipes },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
