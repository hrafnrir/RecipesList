import PropTypes from "prop-types";
import cn from "classnames";

import { getMinutes } from "../../utils/timeConversion.js";

import s from "./styles/RecipeCommonComponent.module.scss";

const RecipeCommonComponent = ({ recipe, imageComponent = null }) => {
  const {
    name,
    isVegan,
    description = null,
    type,
    meal,
    kcal,
    time,
    ingredients,
    recipeText,
    image = null,
  } = recipe;

  const cookingTime = getMinutes(time);
  const recipeIngredients = ingredients.map((item, index) => (
    <span key={index} className={s.ingredient}>
      {item.value}
    </span>
  ));

  return (
    <>
      <div className={s.header}>
        <h2 className={s.heading}>{name}</h2>

        {isVegan && <span className={s.tag}>vegan</span>}
        {description && <p className={s.description}>{description}</p>}

        <div className={cn({ [s.headerContainer]: image })}>
          {imageComponent}

          <div className={s.props}>
            <div className={s.prop}>
              dish type: <span className={s.value}>{type}</span>
            </div>
            <div className={s.prop}>
              {"cooking time (min):  "}
              <span className={s.value}>{cookingTime}</span>
            </div>
            <div className={s.prop}>
              meal of the day: <span className={s.value}>{meal}</span>
            </div>
            <div className={s.prop}>
              kcal in 100 g: <span className={s.value}>{kcal}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={s.block}>
        <h3 className={s.title}>ingredients:</h3>
        <div className={s.ingredientList}>{recipeIngredients}</div>
      </div>
      <div className={s.block}>
        <h3 className={s.title}>the recipe:</h3>
        <p className={s.recipeText}>{recipeText}</p>
      </div>
    </>
  );
};

RecipeCommonComponent.propTypes = {
  recipe: PropTypes.object.isRequired,
  imageComponent: PropTypes.object,
};

export default RecipeCommonComponent;
