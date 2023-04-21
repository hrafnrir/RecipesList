import PropTypes from "prop-types";

import RecipeForm from "./RecipeForm.jsx";

import s from "./styles/FormPopup.module.scss";

const FormPopup = ({ type, closePopup, recipe }) => {
  const header =
    type === "addRecipe"
      ? {
          heading: "Got idea? Let's make a recipe! 🥦",
          description:
            "The list of your dishes is empty. Please add a new recipe.",
        }
      : {
          heading: recipe.name,
          description: "Edit your recipe or delete it.",
        };

  return (
    <>
      <div className={s.header}>
        <h2 className={s.heading}>{header.heading}</h2>
        <p className={s.description}>{header.description}</p>
      </div>
      <RecipeForm type={type} closePopup={closePopup} recipe={recipe} />
    </>
  );
};

FormPopup.propTypes = {
  type: PropTypes.string.isRequired,
  closePopup: PropTypes.func.isRequired,
  recipe: PropTypes.object,
};

export default FormPopup;
