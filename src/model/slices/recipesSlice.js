import { createSlice, nanoid } from "@reduxjs/toolkit";
import { dishTypes, mealsOfTheDay, ingredients } from "./formOptions";

const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
const initialState = {
  recipes,
  dishTypes,
  mealsOfTheDay,
  ingredients,
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
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
        item.id === action.payload.id
          ? {
              ...item,
              ...action.payload,
            }
          : item
      );
    },

    deleteRecipe(state, action) {
      state.recipes = state.recipes.filter(
        ({ id }) => id !== action.payload.id
      );
    },
  },
});

export const { addRecipe, updateRecipe, deleteRecipe } = recipesSlice.actions;

export default recipesSlice.reducer;
