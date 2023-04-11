import { useState } from "react";

import Popup from "../Popup/Popup.jsx";

import s from "./styles/RecipeItem.module.scss";

const RecipeItem = () => {
  const [isPopupOpen, setPopup] = useState(false);

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
          <span className={s.name}>Apple pie</span>
          <span className={s.tag}>vegan</span>
        </div>
        <div className={s.column}>baking</div>
        <div className={s.column}>lunch</div>
        <div className={s.column}>220</div>
        <div className={s.column}>50</div>
        <div className={s.column}></div>
      </div>

      {isPopupOpen && (
        <Popup
          type="openRecipe"
          closePopup={() => {
            setPopup(false);
          }}
        />
      )}
    </>
  );
};

export default RecipeItem;
