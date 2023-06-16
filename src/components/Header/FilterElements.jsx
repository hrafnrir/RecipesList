import Select from "react-select";
import PropTypes from "prop-types";
import cn from "classnames";

import s from "./styles/FilterElements.module.scss";

export const DropDown = ({ name, value, onChange, ...props }) => {
  return (
    <div className={cn(s.wrapper, "wrapper")}>
      <Select
        classNamePrefix="reactSelect"
        unstyled
        value={
          value && {
            value,
            label: value,
          }
        }
        isSearchable={false}
        blurInputOnSelect={false}
        onChange={(option) => onChange({ name, value: option.value })}
        {...props}
      />
    </div>
  );
};

export const Checkbox = ({ name, label, value, onChange }) => {
  return (
    <div className={s.wrapper}>
      <label className={s.checkboxLabel}>
        <input
          className={s.checkbox}
          type="checkbox"
          checked={value}
          onChange={(e) => onChange({ name, value: e.target.checked })}
        />
        {label}
      </label>
    </div>
  );
};

export const RangeInput = ({ name, id, value, label, onChange, max }) => {
  return (
    <div className={s.wrapper}>
      <label className={s.rangeLabel} htmlFor={id}>
        {label}:
      </label>
      <span className={s.rangeValue}>{value}</span>
      <input
        className={s.range}
        type="range"
        id={id}
        value={value}
        onChange={(e) => onChange({ name, value: e.target.value })}
        max={max}
      />
    </div>
  );
};

DropDown.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

RangeInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  max: PropTypes.string.isRequired,
};
