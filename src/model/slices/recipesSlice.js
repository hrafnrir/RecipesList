import { createSlice, nanoid } from "@reduxjs/toolkit";

const recipes = [];
const initialState = {
  recipes,
  dishTypes: [
    "bakery",
    "cake",
    "dessert",
    "drink",
    "pasta",
    "pizza",
    "roast",
    "salad",
    "sandwich",
    "snacks",
    "soup",
    "stew",
  ],
  mealsOfTheDay: ["breakfast", "lunch", "dinner", "supper"],
};

const getArray = (str) => {
  const mark = str.includes(";") ? ";" : ",";
  return str.split(mark).map((item) => item.trim());
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
        ingredients: getArray(action.payload.ingredients),
        recipeText: action.payload.recipeText,
        isVegan: action.payload.isVegan,
      });
    },
  },
});

export const { addRecipe } = recipesSlice.actions;

export default recipesSlice.reducer;
