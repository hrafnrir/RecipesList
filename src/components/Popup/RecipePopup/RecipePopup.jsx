import s from "./styles/RecipePopup.module.scss";

const RecipePopupContent = () => {
  const description = `Bring a large pot of salted water to the boil. Add the pasta into the pot when you start cooking the mushrooms. Cook pasta per packet instructions minus 1 minute. Reserve 1 mugful of pasta cooking liquid, then drain pasta. Melt half butter and all oil in a large skillet over heat. Add mushrooms and cook until water has leeched then evaporated, and the mushrooms start to turn golden around edges around 5 minutes. Halfway through cooking, add salt & pepper. Add garlic and remaining butter, cook for 2 minutes until mushrooms and garlic are golden. Add pasta, about 3/4 cup of reserved pasta water and parmesan. Toss gently or until water reduces and thickens into a saucy glaze that coats the pasta. If the pasta dries out, add more pasta water. Taste and add more salt and pepper if needed. Remove from stove and serve immediately, garnished with fresh parsley and parmesan cheese.`;

  return (
    <>
      <div className={s.header}>
        <h2 className={s.heading}>Mushroom Pasta</h2>
        <span className={s.tag}>vegan</span>
        <p
          className={s.description}
        >{`This is a mushroom pasta that's nice and juicy, in no way dry and dull even though it's not made with a tomato or cream sauce.`}</p>
        <div className={s.props}>
          <div className={s.prop}>
            dish type: <span className={s.value}>pasta</span>
          </div>
          <div className={s.prop}>
            {"cooking time (min):  "}
            <span className={s.value}>30</span>
          </div>
          <div className={s.prop}>
            meal of the day: <span className={s.value}>dinner</span>
          </div>
          <div className={s.prop}>
            kcal in 100 g: <span className={s.value}>90</span>
          </div>
        </div>
      </div>
      <div className={s.block}>
        <h3 className={s.title}>ingredients:</h3>
        <ul>
          <li className={s.ingredient}>160 g spaghetti;</li>
          <li className={s.ingredient}>400 g mushrooms;</li>
          <li className={s.ingredient}>50 g unsalted butter;</li>
          <li className={s.ingredient}>1 tbsp olive oil;</li>
          <li className={s.ingredient}>2 garlic cloves;</li>
          <li className={s.ingredient}>1/2 tsp each salt and pepper;</li>
          <li className={s.ingredient}>1/2 cup parmesan cheese.</li>
        </ul>
      </div>
      <div className={s.block}>
        <h3 className={s.title}>the recipe:</h3>
        <p className={s.recipeText}>{description}</p>
      </div>
    </>
  );
};

export default RecipePopupContent;
