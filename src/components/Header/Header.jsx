import { Link, useLocation } from "react-router-dom";

import SearchField from "./SearchField.jsx";

import s from "./styles/Header.module.scss";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className={s.root}>
      <Link to={"/"}>
        <h1 className={s.heading}>Recipes List</h1>
      </Link>
      {!pathname.includes("recipes") && <SearchField />}
    </div>
  );
};

export default Header;
