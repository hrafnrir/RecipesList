import { useField } from "formik";
import PropTypes from "prop-types";
import cn from "classnames";

import s from "./styles/FormElements.module.scss";

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

export const Select = ({ options, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={s.wrapper}>
      <select className={cn(s.field, s.select)} {...field} {...props}>
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      {meta.touched && meta.error && (
        <span className={s.warn}>{meta.error}</span>
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

Select.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
};
