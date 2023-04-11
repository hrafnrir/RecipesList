import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import Table from "./components/Table/Table.jsx";
import Popup from "./components/Popup/Popup.jsx";

import s from "./App.module.scss";

const App = () => {
  const [isPopupOpen, setPopup] = useState(false);

  return (
    <>
      <div className={s.root}>
        <div className={s.mainBlock}>
          <Header />
          <Table />
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
