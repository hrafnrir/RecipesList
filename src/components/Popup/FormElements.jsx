import { useField } from "formik";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import PropTypes from "prop-types";
import cn from "classnames";

import { TimePicker } from "./TimePicker.jsx";
import FileField from "./FileField.jsx";

import s from "./styles/FormElements.module.scss";
import "./styles/DropDown.css";
import "./styles/TimeInput.css";
import "./styles/FileInput.css";

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

export const TimeInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div className={cn(s.wrapper, "wrapper")}>
      <TimePicker
        name={field.name}
        defaultValue={meta.initialValue}
        label={label}
        onChange={(time) => helpers.setValue(time)}
        onBlur={() => helpers.setTouched(true)}
      />
      {meta.touched && meta.error && (
        <span className={cn(s.warn, "warn")}>{meta.error}</span>
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
        defaultValue={
          meta.initialValue && {
            value: meta.initialValue,
            label: meta.initialValue,
          }
        }
        options={options}
        placeholder={placeholder}
        isSearchable={false}
        blurInputOnSelect={false}
        onChange={(option) => helpers.setValue(option.value)}
        onBlur={() => helpers.setTouched(true)}
      />
      {meta.touched && meta.error && (
        <span className={cn(s.warn, "warn")}>{meta.error}</span>
      )}
    </div>
  );
};

export const MultivaluedDropDown = ({ options, placeholder, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div className={cn(s.wrapper, "wrapper")}>
      <CreatableSelect
        classNamePrefix="reactSelect"
        unstyledname={field.name}
        defaultValue={meta.initialValue}
        options={options}
        placeholder={placeholder}
        isMulti
        closeMenuOnSelect={false}
        blurInputOnSelect={false}
        onChange={(options) => {
          helpers.setValue(
            options.map((item) => {
              return { label: item.label, value: item.value };
            })
          );
        }}
        onBlur={() => helpers.setTouched(true)}
      />
      {meta.touched && meta.error && (
        <span className={cn(s.warn, "warn", "warn_multidd")}>{meta.error}</span>
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

export const FileInput = ({ label, accept, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div className={cn(s.wrapper, "wrapper")}>
      <FileField
        name={field.name}
        accept={accept}
        label={label}
        defaultValue={meta.initialValue}
        onChange={(file) => helpers.setValue(file)}
        setError={helpers.setError}
      />
      {meta.error && (
        <span className={cn(s.warn, s.warn_fileInput)}>{meta.error}</span>
      )}
    </div>
  );
};

TimeInput.propTypes = {
  label: PropTypes.string.isRequired,
};

DropDown.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
};

MultivaluedDropDown.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
};

FileInput.propTypes = {
  label: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
};
