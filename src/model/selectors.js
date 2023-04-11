export const selectRecipes = (state) => state.recipes.recipes;
export const selectOptions = (name) => (state) => state.recipes[name];
