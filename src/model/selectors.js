import { createSelector } from "reselect";

export const selectRecipes = (state) => state.recipes.recipes;
export const selectFilter = (state) => state.recipes.filter;

export const selectFilteredRecipes = createSelector(
  selectRecipes,
  selectFilter,
  (recipes, filter) =>
    recipes.filter((item) =>
      item.name.toLowerCase().includes(filter.trim().toLowerCase())
    )
);

export const selectOptions = (name) =>
  createSelector(
    (state) => state.recipes[name],
    (items) =>
      items.map((item) => {
        return { label: item, value: item };
      })
  );
