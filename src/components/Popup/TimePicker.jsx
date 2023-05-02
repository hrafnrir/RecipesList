import { useEffect, useState, useRef } from "react";
import InputMask from "react-input-mask";
import PropTypes from "prop-types";
import cn from "classnames";

import { getTimeElements } from "./utils/timePicker.js";

import s from "./styles/TimePicker.module.scss";

const hoursMask = "hH",
  minutesMask = "mM";

export const TimePicker = ({
  name,
  defaultValue = "00:00",
  label,
  onChange,
  onBlur,
}) => {
  const [{ hh, mm }, setTime] = useState({
    hh: defaultValue.split(":")[0],
    mm: defaultValue.split(":")[1],
  });
  const [isSelectOpen, setSelect] = useState(false);

  const dropdown = useRef(null);

  useEffect(() => {
    const handleBlurDropDown = (e) => {
      if (
        isSelectOpen &&
        !dropdown.current.contains(e.target) &&
        e.target.name !== "time-btn"
      ) {
        setSelect(false);
        onBlur();
      }
    };

    document.addEventListener("click", handleBlurDropDown);
    document.addEventListener("touchend", handleBlurDropDown);

    return () => {
      document.removeEventListener("click", handleBlurDropDown);
      document.removeEventListener("touchend", handleBlurDropDown);
    };
  }, [isSelectOpen, onBlur]);

  const handleChangeHours = (elem) => {
    const value =
      elem.dataset.value ||
      (elem.value[1] ? elem.value : elem.value[0] ? `${elem.value}0` : "00");

    setTime((prevState) => ({ ...prevState, hh: value }));
    onChange(`${value}:${mm}`);
  };

  const handleChangeMinutes = (elem) => {
    const value =
      elem.dataset.value ||
      (elem.value[1] ? elem.value : elem.value[0] ? `${elem.value}0` : "00");

    setTime((prevState) => ({ ...prevState, mm: value }));
    onChange(`${hh}:${value}`);
  };

  const getOptionClass = (isSelected) =>
    cn(s.option, { [s.option_selected]: isSelected });

  const hoursElements = getTimeElements(
    "hours",
    hh,
    getOptionClass,
    handleChangeHours
  );
  const minutesElements = getTimeElements(
    "minutes",
    mm,
    getOptionClass,
    handleChangeMinutes
  );

  const formatChars = {
    h: "[0-2]",
    H: hh[0] === "2" ? "[0-3]" : "[0-9]",
    m: "[0-5]",
    M: "[0-9]",
  };

  return (
    <div className={s.root} name={name}>
      <div className={cn(s.control, "timepicker__control")}>
        <span className={s.label}>{label}:</span>
        <InputMask
          className={cn(s.input, s.input_hh, "timepicker__input")}
          type="text"
          name="hh"
          value={hh}
          onChange={(e) => handleChangeHours(e.target)}
          mask={hoursMask}
          formatChars={formatChars}
          maskChar=""
        />
        :
        <InputMask
          className={cn(s.input, s.input_mm, "timepicker__input")}
          type="text"
          name="mm"
          value={mm}
          onChange={(e) => handleChangeMinutes(e.target)}
          mask={minutesMask}
          formatChars={formatChars}
          maskChar=""
        />
        <button
          className={s.btn}
          name="time-btn"
          type="button"
          onClick={() => setSelect(!isSelectOpen)}
        />
      </div>

      {isSelectOpen && (
        <div className={s.dropdown} ref={dropdown}>
          <div className={s.container}>{hoursElements}</div>
          <div className={s.container}>{minutesElements}</div>
        </div>
      )}
    </div>
  );
};

TimePicker.propTypes = {
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};
