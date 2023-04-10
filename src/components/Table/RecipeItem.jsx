import s from "./styles/RecipeItem.module.scss";

const RecipeItem = () => {
  return (
    <div className={s.root}>
      <div className={s.column}>
        <button className={s.fastViewBtn}></button>
      </div>
      <div className={s.column}>
        <span className={s.name}>Apple pie</span>
        <span className={s.tag}>vegan</span>
      </div>
      <div className={s.column}>baking</div>
      <div className={s.column}>lunch</div>
      <div className={s.column}>220</div>
      <div className={s.column}>50</div>
      <div className={s.column}></div>
    </div>
  );
};

export default RecipeItem;
