import cn from "classnames";

import s from "./styles/RecipeForm.module.scss";

const RecipeForm = () => {
  return (
    <form className={s.root}>
      <div className={s.wrapper}>
        <input
          className={s.field}
          type="text"
          name="name"
          placeholder="dish name"
        />
        <span className={s.warn}></span>
      </div>

      <div className={s.wrapper}>
        <select className={cn(s.field, s.select)} name="type">
          <option selected hidden disabled>
            dish type
          </option>
          <option>soup</option>
          <option>pasta</option>
          <option>pizza</option>
          <option>salad</option>
        </select>
        <span className={s.warn}></span>
      </div>

      <div className={s.wrapper}>
        <input
          className={s.field}
          type="text"
          name="ingredients"
          placeholder="ingredients for 4 serv"
        />
        <span className={s.warn}></span>
      </div>

      <div className={s.wrapper}>
        <select className={cn(s.field, s.select)} name="meal">
          <option selected hidden disabled>
            meal of the day
          </option>
          <option>breakfast</option>
          <option>lunch</option>
          <option>dinner</option>
          <option>supper</option>
        </select>
        <span className={s.warn}></span>
      </div>

      <div className={s.wrapper}>
        <input
          className={cn(s.field, s.field_warn)}
          type="text"
          name="time"
          placeholder="cooking time"
        />
        <span className={s.warn}>
          The time is incorrect. Enter the time in the format XXX.
        </span>
      </div>

      <div className={s.wrapper}>
        <input
          className={s.field}
          type="text"
          name="kcal"
          placeholder="kcal in 100 g"
        />
        <span className={s.warn}></span>
      </div>

      <div className={s.wrapper}>
        <textarea
          className={cn(s.field, s.textarea)}
          name="recipeText"
          placeholder="the recipe"
        />
        <span className={s.warn}></span>
      </div>

      <div className={s.wrapper}>
        <textarea
          className={cn(s.field, s.textarea)}
          name="description"
          placeholder="dish description"
        />
        <span className={s.warn}></span>
      </div>

      <label className={s.checkboxLabel}>
        <input className={s.checkbox} type="checkbox" name="isVegan" />
        this is a vegan dish
      </label>

      <div className={s.submitWrapper}>
        <input className={s.submitBtn} type="submit" value=""></input>
      </div>
    </form>
  );
};

export default RecipeForm;
