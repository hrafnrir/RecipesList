import { Link } from "react-router-dom";

import SearchField from "./SearchField.jsx";

import s from "./styles/Header.module.scss";

const Header = () => {
  return (
    <div className={s.root}>
      <Link to={"/"}>
        <h1 className={s.heading}>Recipes List</h1>
      </Link>
      <SearchField />
    </div>
  );
};

export default Header;
