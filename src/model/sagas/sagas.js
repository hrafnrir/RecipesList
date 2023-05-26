/*eslint-env node*/

import { nanoid } from "@reduxjs/toolkit";
import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";

import sagaActions from "./actions.js";
import { addLoading, addError } from "../slices/appSlice.js";
import {
  getRecipes,
  addRecipe,
  updateRecipe,
  deleteRecipe,
} from "../slices/recipesSlice.js";

const instance = axios.create({
  baseURL: `http://localhost:${process.env.JSON_SERVER_PORT}/recipes`,
  headers: { Accept: "application/json" },
});

function* fetchRecipes() {
  yield put(addLoading(true));
  try {
    const resp = yield call(async () => await instance(""));
    yield put(getRecipes(resp.data));
    yield put(addLoading(false));
  } catch (e) {
    yield put(addError(`Failed to load recipes. ${e.message}.`));
    yield put(addLoading(false));
  }
}

function* fetchNewRecipe({ payload }) {
  yield put(addLoading(true));
  try {
    const resp = yield call(
      async () => await instance.post("", { id: nanoid(), ...payload })
    );
    yield put(addRecipe(resp.data));
    yield put(addLoading(false));
  } catch (e) {
    yield put(addError(`Failed to add new recipe. ${e.message}.`));
    yield put(addLoading(false));
  }
}

function* fetchUpdatedRecipe({ payload }) {
  yield put(addLoading(true));
  try {
    const prev = yield call(
      async () => await instance(payload.id).then((resp) => resp.data)
    );
    if (JSON.stringify(payload) !== JSON.stringify(prev)) {
      const resp = yield call(
        async () => await instance.put(payload.id, payload)
      );
      yield put(updateRecipe(resp.data));
    }
    yield put(addLoading(false));
  } catch (e) {
    yield put(addError(`Failed to update recipe. ${e.message}.`));
    yield put(addLoading(false));
  }
}

function* fetchDeletedRecipe({ payload }) {
  yield put(addLoading(true));
  try {
    yield call(async () => await instance.delete(payload));
    yield put(deleteRecipe(payload));
    yield put(addLoading(false));
  } catch (e) {
    yield put(addError(`Failed to delete recipe. ${e.message}.`));
    yield put(addLoading(false));
  }
}

export function* rootSaga() {
  yield all([
    yield takeLatest(sagaActions.GET_RECIPES, fetchRecipes),
    yield takeLatest(sagaActions.ADD_NEW_RECIPE, fetchNewRecipe),
    yield takeLatest(sagaActions.UPDATE_RECIPE, fetchUpdatedRecipe),
    yield takeLatest(sagaActions.DELETE_RECIPE, fetchDeletedRecipe),
  ]);
}
