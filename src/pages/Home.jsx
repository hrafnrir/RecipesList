import { useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

import { selectRecipes } from "../model/selectors.js";

import Table from "../components/Table/Table.jsx";
import Popup from "../components/Popup/Popup.jsx";
import EmptyList from "../components/EmptyList/EmptyList.jsx";

import s from "./styles/Home.module.scss";

export const Home = () => {
  const isListEmpty = !useSelector(selectRecipes).length;
  const [isPopupOpen, setPopup] = useState(false);

  return (
    <>
      {isListEmpty ? <EmptyList type="main" /> : <Table />}
      <button
        className={s.addRecipeBtn}
        onClick={() => {
          setPopup(true);
        }}
      ></button>
      {isPopupOpen &&
        createPortal(
          <Popup type="addRecipe" closePopup={() => setPopup(false)} />,
          document.getElementById("root")
        )}
    </>
  );
};
