import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

import { addRecipe } from "../../../../model/slices/recipesSlice.js";
import { selectOptions } from "../../../../model/selectors.js";

import { TextInput, Textarea, Select, Checkbox } from "./FormElements.jsx";

import s from "./styles/RecipeForm.module.scss";

const RecipeForm = ({ closePopup }) => {
  const dispatch = useDispatch();

  const dishTypes = useSelector(selectOptions("dishTypes"));
  const mealsOfTheDay = useSelector(selectOptions("mealsOfTheDay"));

  const initialValues = {
    name: "",
    type: "",
    ingredients: "",
    meal: "",
    time: "",
    kcal: "",
    recipeText: "",
    description: "",
    isVegan: false,
  };

  const validation = {
    name: Yup.string()
      .max(50, "Must be 50 characters or less.")
      .required("Dish name can't be blank."),

    type: Yup.string().required("Dish type can't be blank."),

    ingredients: Yup.string()
      .max(250, "Must be 250 characters or less.")
      .required("Ingredients can't be blank."),

    meal: Yup.string().required("Meal can't be blank."),

    time: Yup.number()
      .typeError("The time is incorrect. Enter the time in the format XXX.")
      .required("Cooking time can't be blank."),

    kcal: Yup.number()
      .typeError("Calories are incorrect. Enter calories in the format XXX.")
      .required("Calories can't be blank."),

    recipeText: Yup.string()
      .max(1000, "Must be 1000 characters or less.")
      .required("The recipe can't be blank."),

    description: Yup.string().max(200, "Must be 200 characters or less."),
  };

  const handleSubmit = (values) => {
    dispatch(addRecipe({ ...values }));
    closePopup();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object(validation)}
      onSubmit={(values) => handleSubmit(values)}
    >
      <Form className={s.root}>
        <TextInput type="text" name="name" placeholder="dish name" />

        <Select name="type" options={dishTypes} placeholder="dish type" />

        <TextInput
          type="text"
          name="ingredients"
          placeholder="ingredients for 4 serv"
        />

        <Select
          name="meal"
          options={mealsOfTheDay}
          placeholder="meal of the day"
        />

        <TextInput type="text" name="time" placeholder="cooking time" />

        <TextInput type="text" name="kcal" placeholder="kcal in 100 g" />

        <Textarea name="recipeText" placeholder="the recipe" />

        <Textarea name="description" placeholder="dish description" />

        <Checkbox label="this is a vegan dish" name="isVegan" />

        <div className={s.submitWrapper}>
          <input className={s.submitBtn} type="submit" value=""></input>
        </div>
      </Form>
    </Formik>
  );
};

RecipeForm.propTypes = {
  closePopup: PropTypes.func.isRequired,
};

export default RecipeForm;
