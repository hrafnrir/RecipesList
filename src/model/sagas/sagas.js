import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";

import sagaActions from "./actions.js";
import { addLoading, addError } from "../slices/appSlice.js";
import { getRecipes, addRecipe } from "../slices/recipesSlice.js";

const instance = axios.create({
  baseURL: "http://localhost:3004/recipes",
  headers: { Accept: "application/json" },
});

function* fetchRecipes() {
  yield put(addLoading(true));
  try {
    const resp = yield call(async () => await instance(""));
    yield put(getRecipes(resp.data));
    yield put(addLoading(false));
  } catch (e) {
    yield put(addError(e.message));
    yield put(addLoading(false));
  }
}

function* fetchNewRecipe({ payload }) {
  yield put(addLoading(true));
  try {
    const resp = yield call(async () => await instance.post("", payload));
    yield put(addRecipe(resp.data));
    yield put(addLoading(false));
  } catch (e) {
    yield put(addError(e.message));
    yield put(addLoading(false));
  }
}

export function* rootSaga() {
  yield all([
    yield takeLatest(sagaActions.GET_RECIPES, fetchRecipes),
    yield takeLatest(sagaActions.ADD_NEW_RECIPE, fetchNewRecipe),
  ]);
}
