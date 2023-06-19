import { createSelector } from "reselect";

import { getMinutes } from "../../utils/timeConversion.js";

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

export const selectFilteredRecipes = ({
  type = "",
  meal = "",
  kcal = "",
  time = "",
  isVegan = false,
  search = "",
}) =>
  createSelector(selectRecipes, (recipes) =>
    recipes.filter((item) => {
      if (type && item.type !== type) return false;
      if (meal && item.meal !== meal) return false;
      if (kcal && +item.kcal > kcal) return false;
      if (time && getMinutes(item.time) > time) return false;
      if (isVegan && !item.isVegan) return false;
      if (!item.name.toLowerCase().includes(search.trim().toLowerCase()))
        return false;
      return true;
    })
  );
