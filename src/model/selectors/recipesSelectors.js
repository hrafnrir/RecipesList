import { createSelector } from "reselect";

export const selectRecipes = (state) => state.recipes.recipes;

export const selectOptions = (name) =>
  createSelector(
    (state) => state.recipes[name],
    (items) =>
      items.map((item) => {
        return { label: item, value: item };
      })
  );

export const selectRecipeById = (recipeId) => (state) =>
  selectRecipes(state).find(({ id }) => id === recipeId);

export const selectRecipeImage = (recipeId) => (state) => {
  const { name, image } = selectRecipes(state).find(
    ({ id }) => id === recipeId
  );
  return { name, image };
};
