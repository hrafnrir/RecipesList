export const getTimeElements = (type, current, getClass, handleChangeTime) => {
  return new Array(type === "hours" ? 24 : 60).fill().map((_, i) => {
    const n = i < 10 ? `0${i}` : `${i}`;
    return (
      <div
        className={getClass(n === current)}
        key={n}
        id={type === "hours" ? `hh-option-${n}` : `mm-option-${n}`}
        role="option"
        data-value={n}
        aria-selected={n === current}
        tabIndex={type === "hours" ? i + 1 : i + 24}
        onClick={(e) => handleChangeTime(e.target)}
        onKeyUp={(e) => e.key === "Tab" && handleChangeTime(e.target)}
      >
        {n}
      </div>
    );
  });
};
