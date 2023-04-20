import { useField } from "formik";
import Select from "react-select";
import PropTypes from "prop-types";
import cn from "classnames";

import s from "./styles/FormElements.module.scss";
import "./styles/DropDown.css";

export const TextInput = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className={s.wrapper}>
      <input className={s.field} {...field} {...props} />
      {meta.touched && meta.error && (
        <span className={s.warn}>{meta.error}</span>
      )}
    </div>
  );
};

export const Textarea = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className={s.wrapper}>
      <textarea className={cn(s.field, s.textarea)} {...field} {...props} />
      {meta.touched && meta.error && (
        <span className={s.warn}>{meta.error}</span>
      )}
    </div>
  );
};

export const DropDown = ({ options, placeholder, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div className={cn(s.wrapper, "wrapper")}>
      <Select
        classNamePrefix="reactSelect"
        unstyled
        name={field.name}
        options={options}
        placeholder={placeholder}
        isSearchable={false}
        onChange={(option) => helpers.setValue(option.value)}
        onBlur={() => helpers.setTouched(true)}
      />
      {meta.touched && meta.error && (
        <span className={cn(s.warn, "warn")}>{meta.error}</span>
      )}
    </div>
  );
};

export const Checkbox = ({ label, ...props }) => {
  const [field] = useField({ ...props, type: "checkbox" });
  return (
    <label className={s.checkboxLabel}>
      <input className={s.checkbox} type="checkbox" {...field} {...props} />
      {label}
    </label>
  );
};

DropDown.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
};
