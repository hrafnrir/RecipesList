import * as Yup from "yup";

const emptyError = (field) => `${field} can't be blank.`;
const maxLengthError = (maxLength, item = "characters") =>
  `Must be ${maxLength} ${item} or less.`;
const numberError = (field, verb) =>
  `${field} ${verb} incorrect. Enter ${field.toLowerCase()} in the format XXX.`;

export const validation = Yup.object({
  name: Yup.string()
    .max(50, maxLengthError(50))
    .required(emptyError("Dish name")),

  type: Yup.string().required(emptyError("Dish type")),

  ingredients: Yup.array()
    .max(30, maxLengthError(30, "ingredients"))
    .min(1, emptyError("Ingredients"))
    .required(emptyError("Ingredients")),

  meal: Yup.string().required(emptyError("Meal")),

  time: Yup.string()
    .matches(/[^0:]/g, emptyError("Cooking time"))
    .required(emptyError("Cooking time")),

  kcal: Yup.number()
    .typeError(numberError("Calories", "are"))
    .required(emptyError("Calories")),

  recipeText: Yup.string()
    .max(1000, maxLengthError(1000))
    .required(emptyError("The recipe")),

  description: Yup.string().max(200, maxLengthError(200)),
});
