import PropTypes from "prop-types";

import RecipeForm from "./RecipeForm.jsx";

import s from "./styles/FormPopup.module.scss";

const FormPopup = ({ closePopup }) => {
  return (
    <>
      <div className={s.header}>
        <h2 className={s.heading}>{`Got idea? Let's make a recipe! 🥦`}</h2>
        <p className={s.description}>
          Please fill in the input fields below and submit your recipe.
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
