import PropTypes from "prop-types";

import s from "./styles/ErrorPopup.module.scss";

const ErrorPopup = ({ message, closePopup }) => {
  return (
    <div className={s.root}>
      <div className={s.mainWrapper}>
        <div className={s.mainBlock}>
          <h3 className={s.heading}>Oops! Something went wrong...</h3>
          <p className={s.message}>{message}</p>
          <button className={s.closeBtn} onClick={closePopup}></button>
        </div>
      </div>
    </div>
  );
};

ErrorPopup.propTypes = {
  message: PropTypes.string.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default ErrorPopup;
