export const localStorageMiddleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    const result = next(action);
    localStorage.setItem("recipes", JSON.stringify(getState().recipes.recipes));
    return result;
  };
