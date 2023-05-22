import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectRecipeById } from "../model/selectors.js";

import RecipeCommonComponent from "../components/Popup/RecipeCommonComponent.jsx";

import s from "./styles/Recipe.module.scss";

export const Recipe = () => {
  const { id } = useParams();
  const recipe = useSelector(selectRecipeById(id));

  return (
    <div className={s.root}>
      <RecipeCommonComponent recipe={recipe} />
    </div>
  );
};
