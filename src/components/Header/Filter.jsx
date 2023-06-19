import { Form, useSearchParams, useSubmit } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import cn from "classnames";

import { selectOptions } from "../../model/selectors/recipesSelectors.js";

import { DropDown, RangeInput, Checkbox } from "./FilterElements.jsx";

import s from "./styles/Filter.module.scss";
import "./styles/Filter.css";

const Filter = ({ visibility }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterQuery = {
    type: searchParams.get("type") || "",
    meal: searchParams.get("meal") || "",
    kcal: +searchParams.get("kcal") || 0,
    time: +searchParams.get("time") || 0,
    isVegan: searchParams.get("isVegan") ? true : false,
  };

  const submit = useSubmit();

  const dishTypeOptions = useSelector(selectOptions("dishTypes"));
  const mealOfTheDayOptions = useSelector(selectOptions("mealsOfTheDay"));

  const handleInputChange = ({ name, value }) => {
    if (value) {
      const prevValues = {};

      for (const [key, value] of searchParams.entries()) {
        prevValues[key] = value;
      }

      submit(
        { ...prevValues, [name]: value },
        {
          method: "get",
          action: "/",
          replace: !(searchParams.toString() === ""),
        }
      );
    } else {
      searchParams.delete(name);
      setSearchParams(searchParams);
    }
  };

  const handleResetForm = (e) => {
    e.preventDefault();

    searchParams.has("search")
      ? setSearchParams({
          search: searchParams.get("search"),
        })
      : setSearchParams("");
  };

  const wrapperClass = cn(s.wrapper, {
    [s.wrapper_visible]: visibility,
    [s.wrapper_unvisible]: !visibility,
  });

  return (
    <div className={cn(s.root, "root")}>
      <div className={wrapperClass}>
        <Form className={s.form} onReset={handleResetForm}>
          <DropDown
            name="type"
            options={dishTypeOptions}
            placeholder="dish type"
            value={filterQuery.type}
            onChange={handleInputChange}
          />
          <DropDown
            name="meal"
            options={mealOfTheDayOptions}
            placeholder="meal of the day"
            value={filterQuery.meal}
            onChange={handleInputChange}
          />
          <RangeInput
            name="kcal"
            label="kcal in 100 g"
            max="500"
            id="kcal-field"
            value={filterQuery.kcal}
            onChange={handleInputChange}
          />
          <RangeInput
            name="time"
            label="cooking time (min)"
            max="500"
            id="time-field"
            value={filterQuery.time}
            onChange={handleInputChange}
          />
          <Checkbox
            label="this is a vegan dish"
            name="isVegan"
            value={filterQuery.isVegan}
            onChange={handleInputChange}
          />
          <input
            className={s.submitBtn}
            type="reset"
            value="reset filter"
          ></input>
        </Form>
      </div>
    </div>
  );
};

Filter.propTypes = {
  visibility: PropTypes.bool.isRequired,
};

export default Filter;
