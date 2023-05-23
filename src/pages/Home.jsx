import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectRecipes } from "../model/recipesSelectors.js";
import { selectError } from "../model/appSelectors.js";
import sagaActions from "../model/sagas/actions.js";

import Table from "../components/Table/Table.jsx";
import Popup from "../components/Popup/Popup.jsx";
import EmptyList from "../components/EmptyList/EmptyList.jsx";
import ErrorPopup from "../components/Popup/ErrorPopup.jsx";

import s from "./styles/Home.module.scss";

export const Home = () => {
  const [isPopupOpen, setPopup] = useState({ addRecipe: false, error: false });

  const dispatch = useDispatch();

  const isListEmpty = !useSelector(selectRecipes).length;
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch({ type: sagaActions.GET_RECIPES });
  }, [dispatch]);

  useEffect(() => {
    error && setPopup((prevState) => ({ ...prevState, error: true }));
  }, [error]);

  return (
    <>
      {isListEmpty ? <EmptyList type="main" /> : <Table />}
      <button
        className={s.addRecipeBtn}
        onClick={() => {
          setPopup((prevState) => ({ ...prevState, addRecipe: true }));
        }}
      ></button>

      {isPopupOpen.addRecipe &&
        createPortal(
          <Popup
            type="addRecipe"
            closePopup={() =>
              setPopup((prevState) => ({ ...prevState, addRecipe: false }))
            }
          />,
          document.getElementById("root")
        )}

      {isPopupOpen.error &&
        createPortal(
          <ErrorPopup
            message={error}
            closePopup={() =>
              setPopup((prevState) => ({ ...prevState, error: false }))
            }
          />,
          document.getElementById("root")
        )}
    </>
  );
};
