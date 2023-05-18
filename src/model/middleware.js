import { addRecipe } from "./slices/recipesSlice.js";

export const localStorageMiddleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    const result = next(action);
    localStorage.setItem("recipes", JSON.stringify(getState().recipes.recipes));
    return result;
  };

export const resetSearchParamsMiddleware = () => (next) => (action) => {
  const result = next(action);
  action.type === addRecipe.type && location.search && (location.search = "");
  return result;
};
