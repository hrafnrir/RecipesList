import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";

import { addRecipe } from "../../model/slices/recipesSlice.js";
import { selectOptions } from "../../model/selectors.js";
import { validation } from "./formValidation.js";

import { TextInput, Textarea, DropDown, Checkbox } from "./FormElements.jsx";

import s from "./styles/RecipeForm.module.scss";

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

const RecipeForm = ({ closePopup }) => {
  const dispatch = useDispatch();

  const dishTypeOptions = useSelector(selectOptions("dishTypes"));
  const mealOfTheDayOptions = useSelector(selectOptions("mealsOfTheDay"));

  const handleSubmit = (values) => {
    dispatch(addRecipe({ ...values }));
    closePopup();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={(values) => handleSubmit(values)}
    >
      <Form className={s.root}>
        <TextInput type="text" name="name" placeholder="dish name" />
        <DropDown
          name="type"
          options={dishTypeOptions}
          placeholder="dish type"
        />
        <TextInput
          type="text"
          name="ingredients"
          placeholder="ingredients for 4 serv"
        />
        <DropDown
          name="meal"
          options={mealOfTheDayOptions}
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
