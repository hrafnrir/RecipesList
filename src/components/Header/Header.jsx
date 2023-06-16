import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import cn from "classnames";

import { selectRecipes } from "../../model/selectors/recipesSelectors.js";

import SearchField from "./SearchField.jsx";
import Filter from "./Filter.jsx";

import s from "./styles/Header.module.scss";

const Header = () => {
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterExpanded, setFilterExpanded] = useState(false);

  const isListEmpty = !useSelector(selectRecipes).length;

  const handleClickOnFilterBtn = () => {
    setFilterExpanded(!isFilterExpanded);
  };

  useEffect(() => {
    isListEmpty && searchParams.get("search") && setSearchParams("");
  }, [isListEmpty, searchParams, setSearchParams]);

  const filterBtnClass = cn(s.filterBtn, {
    [s.filterBtn_active]: isFilterExpanded,
  });

  return (
    <>
      <div className={s.root}>
        <Link to="/">
          <h1 className={s.heading}>Recipes List</h1>
        </Link>

        {isListEmpty ||
          (!pathname[1] && (
            <>
              <SearchField />
              <button
                className={filterBtnClass}
                onClick={handleClickOnFilterBtn}
              >
                filter
              </button>
            </>
          ))}
      </div>

      {isListEmpty || (!pathname[1] && isFilterExpanded && <Filter />)}
    </>
  );
};

export default Header;
