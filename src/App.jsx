import Header from "./components/Header/Header.jsx";
import Table from "./components/Table/Table.jsx";

import s from "./App.module.scss";

const App = () => {
  return (
    <div className={s.root}>
      <div className={s.mainBlock}>
        <Header />
        <Table />
      </div>
      <button className={s.addRecipeBtn}></button>
    </div>
  );
};

export default App;
