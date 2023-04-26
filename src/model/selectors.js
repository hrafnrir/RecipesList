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
