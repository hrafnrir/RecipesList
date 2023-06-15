import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import { addError } from "../model/slices/appSlice.js";
import { selectRecipes } from "../model/selectors/recipesSelectors.js";
import { selectError, selectLoading } from "../model/selectors/appSelectors.js";
import sagaActions from "../model/sagas/actions.js";

import Table from "../components/Table/Table.jsx";
import Popup from "../components/Popup/Popup.jsx";
import EmptyList from "../components/EmptyList/EmptyList.jsx";
import ErrorPopup from "../components/Popup/ErrorPopup.jsx";
import Loading from "../components/Loading/Loading.jsx";

import s from "./styles/Home.module.scss";

export const Home = () => {
  const [isPopupOpen, setPopup] = useState({ addRecipe: false, error: false });

  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const isListEmpty = !useSelector(selectRecipes).length;

  useEffect(() => {
    dispatch({ type: sagaActions.GET_RECIPES });
  }, [dispatch]);

  useEffect(() => {
    error && setPopup((prevState) => ({ ...prevState, error: true }));
  }, [error]);

  const handleCloseErrorPopup = () => {
    setPopup((prevState) => ({ ...prevState, error: false }));
    dispatch(addError(null));
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : isListEmpty ? (
        <EmptyList type="main" />
      ) : (
        <Table />
      )}
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
          <ErrorPopup message={error} closePopup={handleCloseErrorPopup} />,
          document.getElementById("root")
        )}
    </>
  );
};
