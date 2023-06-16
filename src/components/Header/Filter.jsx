import { Form } from "react-router-dom";
import { useSelector } from "react-redux";
import cn from "classnames";

import { selectOptions } from "../../model/selectors/recipesSelectors.js";

import { DropDown, RangeInput, Checkbox } from "./FilterElements.jsx";

import s from "./styles/Filter.module.scss";
import "./styles/Filter.css";

const Filter = () => {
  const dishTypeOptions = useSelector(selectOptions("dishTypes"));
  const mealOfTheDayOptions = useSelector(selectOptions("mealsOfTheDay"));

  const handleChange = () => {};

  return (
    <div className={cn(s.root, "root")}>
      <Form className={s.form}>
        <DropDown
          name="type"
          options={dishTypeOptions}
          placeholder="dish type"
          value="soup"
          onChange={handleChange}
        />
        <DropDown
          name="meal"
          options={mealOfTheDayOptions}
          placeholder="meal of the day"
          value="lunch"
          onChange={handleChange}
        />
        <RangeInput
          name="kcal"
          label="kcal in 100 g"
          max="500"
          id="kcal-field"
          value="80"
          onChange={handleChange}
        />
        <RangeInput
          name="time"
          label="cooking time (min)"
          max="500"
          id="time-field"
          value="90"
          onChange={handleChange}
        />
        <Checkbox
          label="this is a vegan dish"
          name="isVegan"
          value={true}
          onChange={handleChange}
        />
        <input
          className={s.submitBtn}
          type="reset"
          value="reset filter"
        ></input>
      </Form>
    </div>
  );
};

export default Filter;
