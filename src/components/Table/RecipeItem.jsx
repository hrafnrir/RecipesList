import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { getMinutes } from "../../utils/timeConversion.js";

import Popup from "../Popup/Popup.jsx";

import s from "./styles/RecipeItem.module.scss";

const RecipeItem = ({ recipe }) => {
  const [isPopupOpen, setPopup] = useState({ fastView: false, edit: false });

  const { id, name, isVegan, type, meal, kcal, time } = recipe;

  const cookingTime = getMinutes(time);

  return (
    <>
      <div className={s.root}>
        <div className={s.column}>
          <button
            className={s.fastViewBtn}
            onClick={() =>
              setPopup((prevState) => ({ ...prevState, fastView: true }))
            }
          ></button>
        </div>
        <div className={s.column}>
          <span className={s.name}>{name}</span>
          {isVegan && <span className={s.tag}>vegan</span>}
        </div>
        <div className={s.column}>{type}</div>
        <div className={s.column}>{meal}</div>
        <div className={s.column}>{kcal}</div>
        <div className={s.column}>{cookingTime}</div>
        <div className={s.column}>
          <button
            className={s.editBtn}
            onClick={() =>
              setPopup((prevState) => ({ ...prevState, edit: true }))
            }
          ></button>
        </div>
        <Link to={`recipes/${id}`} className={s.link}></Link>
      </div>

      {isPopupOpen.fastView &&
        createPortal(
          <Popup
            type="openRecipe"
            recipe={recipe}
            closePopup={() =>
              setPopup((prevState) => ({ ...prevState, fastView: false }))
            }
          />,
          document.getElementById("root")
        )}

      {isPopupOpen.edit &&
        createPortal(
          <Popup
            type="editRecipe"
            recipe={recipe}
            closePopup={() => {
              setPopup((prevState) => ({ ...prevState, edit: false }));
            }}
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
