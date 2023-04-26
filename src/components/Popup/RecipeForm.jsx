import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import cn from "classnames";

import {
  addRecipe,
  updateRecipe,
  deleteRecipe,
} from "../../model/slices/recipesSlice.js";
import { selectOptions } from "../../model/selectors.js";
import { validation } from "./formValidation.js";

import {
  TextInput,
  Textarea,
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
  time: "",
  kcal: "",
  recipeText: "",
  description: "",
  isVegan: false,
};

const RecipeForm = ({ type, closePopup, recipe }) => {
  const dispatch = useDispatch();

  const dishTypeOptions = useSelector(selectOptions("dishTypes"));
  const mealOfTheDayOptions = useSelector(selectOptions("mealsOfTheDay"));
  const ingredientOptions = useSelector(selectOptions("ingredients"));

  const recipeValues = { ...recipe };
  delete recipeValues.id;

  const initialValues = type === "addRecipe" ? clearValues : recipeValues;

  const handleSubmit = (values) => {
    if (type === "addRecipe") {
      dispatch(addRecipe({ ...values }));
    } else {
      const updatedValues = Object.keys(values).reduce((obj, item) => {
        if (values[item] !== initialValues[item]) {
          obj[item] = values[item];
          return obj;
        }
        return obj;
      }, {});

      dispatch(updateRecipe({ ...updatedValues, id: recipe.id }));
    }

    closePopup();
  };

  const handleDelete = () => {
    dispatch(deleteRecipe({ id: recipe.id }));
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
        <TextInput type="text" name="time" placeholder="cooking time" />
        <MultivaluedDropDown
          name="ingredients"
          options={ingredientOptions}
          placeholder="ingredients for 4 serv"
        />
        <TextInput type="text" name="kcal" placeholder="kcal in 100 g" />
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
