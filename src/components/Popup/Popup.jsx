import PropTypes from "prop-types";

import FormPopup from "./FormPopup.jsx";
import RecipeCommonComponent from "./RecipeCommonComponent.jsx";

import s from "./styles/Popup.module.scss";

const Popup = ({ type, closePopup, recipe }) => {
  return (
    <div className={s.root}>
      <div className={s.mainWrapper}>
        <div className={s.mainBlock}>
          {type === "openRecipe" ? (
            <RecipeCommonComponent recipe={recipe} />
          ) : (
            <FormPopup type={type} closePopup={closePopup} recipe={recipe} />
          )}
          <button className={s.closeBtn} onClick={closePopup}></button>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  type: PropTypes.string.isRequired,
  closePopup: PropTypes.func.isRequired,
  recipe: PropTypes.object,
};

export default Popup;
