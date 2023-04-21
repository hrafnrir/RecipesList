import { useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import Popup from "../Popup/Popup.jsx";

import s from "./styles/RecipeItem.module.scss";

const RecipeItem = ({ recipe }) => {
  const [isPopupOpen, setPopup] = useState(false);

  const { name, isVegan, type, meal, kcal, time } = recipe;

  return (
    <>
      <div className={s.root}>
        <div className={s.column}>
          <button
            className={s.fastViewBtn}
            onClick={() => setPopup(true)}
          ></button>
        </div>
        <div className={s.column}>
          <span className={s.name}>{name}</span>
          {isVegan && <span className={s.tag}>vegan</span>}
        </div>
        <div className={s.column}>{type}</div>
        <div className={s.column}>{meal}</div>
        <div className={s.column}>{kcal}</div>
        <div className={s.column}>{time}</div>
        <div className={s.column}>
          <button className={s.editBtn}></button>
        </div>
      </div>

      {isPopupOpen &&
        createPortal(
          <Popup
            type="openRecipe"
            recipe={recipe}
            closePopup={() => setPopup(false)}
          />,
          document.getElementById("root")
        )}
    </>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipeItem;
