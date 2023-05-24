import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import cn from "classnames";

import { selectOptions } from "../../model/recipesSelectors.js";
import { validation } from "./formValidation.js";
import sagaActions from "../../model/sagas/actions.js";

import {
  TextInput,
  Textarea,
  TimeInput,
  DropDown,
  MultivaluedDropDown,
  Checkbox,
} from "./FormElements.jsx";

import s from "./styles/RecipeForm.module.scss";

const clearValues = {
  name: "",
  type: "",
  ingredients: "",
  meal: "",
  time: "00:00",
  kcal: "",
  recipeText: "",
  description: "",
  isVegan: false,
};

const RecipeForm = ({ type, closePopup, recipe }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  const dishTypeOptions = useSelector(selectOptions("dishTypes"));
  const mealOfTheDayOptions = useSelector(selectOptions("mealsOfTheDay"));
  const ingredientOptions = useSelector(selectOptions("ingredients"));

  const initialValues = type === "addRecipe" ? clearValues : recipe;

  const handleSubmit = (values) => {
    if (type === "addRecipe") {
      searchParams.get("search") && setSearchParams("");
      dispatch({ type: sagaActions.ADD_NEW_RECIPE, payload: { ...values } });
    } else {
      dispatch({ type: sagaActions.UPDATE_RECIPE, payload: { ...values } });
    }

    closePopup();
  };

  const handleDelete = () => {
    dispatch({ type: sagaActions.DELETE_RECIPE, payload: recipe.id });
    closePopup();
  };

  const submitBtnClass = cn(s.submitWrapper, {
    [s.submitWrapper_editRecipe]: type === "editRecipe",
  });

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
        <DropDown
          name="meal"
          options={mealOfTheDayOptions}
          placeholder="meal of the day"
        />
        <TextInput type="text" name="kcal" placeholder="kcal in 100 g" />
        <MultivaluedDropDown
          name="ingredients"
          options={ingredientOptions}
          placeholder="ingredients for 4 serv"
        />
        <TimeInput type="time" name="time" label="cooking time" />
        <Textarea name="recipeText" placeholder="the recipe" />
        <Textarea name="description" placeholder="dish description" />
        <Checkbox label="this is a vegan dish" name="isVegan" />
        <div className={submitBtnClass}>
          <input className={s.submitBtn} type="submit" value=""></input>
        </div>

        {type === "editRecipe" && (
          <button
            className={s.deleteBtn}
            type="button"
            onClick={handleDelete}
          ></button>
        )}
      </Form>
    </Formik>
  );
};

RecipeForm.propTypes = {
  type: PropTypes.string.isRequired,
  closePopup: PropTypes.func.isRequired,
  recipe: PropTypes.object,
};

export default RecipeForm;
