import { useState } from "react";
import { useSelector } from "react-redux";

import { selectRecipes } from "./model/selectors.js";

import Header from "./components/Header/Header.jsx";
import Table from "./components/Table/Table.jsx";
import Popup from "./components/Popup/Popup.jsx";
import EmptyList from "./components/EmptyList/EmptyList.jsx";

import s from "./App.module.scss";

const App = () => {
  const isListEmpty = !useSelector(selectRecipes).length;
  const [isPopupOpen, setPopup] = useState(false);

  return (
    <>
      <div className={s.root}>
        <div className={s.mainBlock}>
          <Header />
          {!isListEmpty && <Table />}
          {isListEmpty && <EmptyList />}
        </div>
        <button
          className={s.addRecipeBtn}
          onClick={() => {
            setPopup(true);
          }}
        ></button>
      </div>
      {isPopupOpen && (
        <Popup
          type="addRecipe"
          closePopup={() => {
            setPopup(false);
          }}
        />
      )}
    </>
  );
};

export default App;
