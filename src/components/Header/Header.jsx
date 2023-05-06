import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectFilter } from "../../model/selectors.js";
import { filterRecipes } from "../../model/slices/recipesSlice.js";

import s from "./styles/Header.module.scss";

const Header = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div className={s.root}>
      <Link to={"/"}>
        <h1 className={s.heading}>Recipes List</h1>
      </Link>
      <input
        className={s.search}
        value={filter}
        onChange={(e) => dispatch(filterRecipes({ filter: e.target.value }))}
        type="text"
        placeholder="search recipes"
      ></input>
    </div>
  );
};

export default Header;
