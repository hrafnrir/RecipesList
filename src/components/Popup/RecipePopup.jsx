import PropTypes from "prop-types";

import RecipeCommonComponent from "./RecipeCommonComponent.jsx";

import s from "./styles/RecipePopup.module.scss";

const RecipePopup = ({ recipe }) => {
  const { image = null } = recipe;

  const imageStyle = { backgroundImage: `url(${image})` };

  const imageComponent = image && (
    <div className={s.image} style={imageStyle}></div>
  );

  return (
    <RecipeCommonComponent recipe={recipe} imageComponent={imageComponent} />
  );
};

RecipePopup.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipePopup;
