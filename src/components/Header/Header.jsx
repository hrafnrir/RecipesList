import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";

import { selectRecipes } from "../../model/selectors.js";

import SearchField from "./SearchField.jsx";

import s from "./styles/Header.module.scss";

const Header = () => {
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const isListEmpty = !useSelector(selectRecipes).length;

  useEffect(() => {
    isListEmpty && searchParams.get("search") && setSearchParams("");
  }, [isListEmpty, searchParams, setSearchParams]);

  return (
    <div className={s.root}>
      <Link to="/">
        <h1 className={s.heading}>Recipes List</h1>
      </Link>
      {isListEmpty || (!pathname[1] && <SearchField />)}
    </div>
  );
};

export default Header;
