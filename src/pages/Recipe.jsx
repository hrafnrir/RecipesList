import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { selectRecipeById } from "../model/recipesSelectors.js";

import RecipeCommonComponent from "../components/Popup/RecipeCommonComponent.jsx";

import s from "./styles/Recipe.module.scss";

export const Recipe = () => {
  const { id } = useParams();
  const recipe = useSelector(selectRecipeById(id));

  const { image = null } = recipe;

  const imageStyle = { backgroundImage: `url(${image})` };

  const imageComponent = image && (
    <Link to="picture">
      <div className={s.imageContainer}>
        <div className={s.zoom}></div>
        <div className={s.image} style={imageStyle}></div>
      </div>
    </Link>
  );

  return (
    <div className={s.root}>
      <RecipeCommonComponent recipe={recipe} imageComponent={imageComponent} />
    </div>
  );
};
