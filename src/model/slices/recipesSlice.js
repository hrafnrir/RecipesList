import { createSlice, nanoid } from "@reduxjs/toolkit";

import { dishTypes, mealsOfTheDay, ingredients } from "./formOptions.js";

const initialState = {
  recipes: [],
  dishTypes,
  mealsOfTheDay,
  ingredients,
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    getRecipes(state, action) {
      state.recipes = action.payload;
    },

    addRecipe(state, action) {
      state.recipes.unshift({
        id: nanoid(),
        name: action.payload.name,
        description: action.payload.description,
        type: action.payload.type,
        meal: action.payload.meal,
        time: action.payload.time,
        kcal: action.payload.kcal,
        ingredients: action.payload.ingredients,
        recipeText: action.payload.recipeText,
        isVegan: action.payload.isVegan,
      });
    },

    updateRecipe(state, action) {
      state.recipes = state.recipes.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },

    deleteRecipe(state, action) {
      state.recipes = state.recipes.filter(
        ({ id }) => id !== action.payload.id
      );
    },
  },
});

export const { getRecipes, addRecipe, updateRecipe, deleteRecipe } =
  recipesSlice.actions;

export default recipesSlice.reducer;
