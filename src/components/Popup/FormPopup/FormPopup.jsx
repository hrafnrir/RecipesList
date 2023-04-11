import PropTypes from "prop-types";

import RecipeForm from "./RecipeForm/RecipeForm.jsx";

import s from "./styles/FormPopup.module.scss";

const FormPopup = ({ closePopup }) => {
  return (
    <>
      <div className={s.header}>
        <h2 className={s.heading}>{`Got idea? Let's make a recipe! 🥦`}</h2>
        <p className={s.description}>
          The list of your dishes is empty. Please add a new recipe.
        </p>
      </div>
      <RecipeForm closePopup={closePopup} />
    </>
  );
};

FormPopup.propTypes = {
  closePopup: PropTypes.func.isRequired,
};

export default FormPopup;
