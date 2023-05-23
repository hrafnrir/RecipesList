import PropTypes from "prop-types";

import s from "./styles/Error.module.scss";

const Error = ({ message }) => {
  return (
    <div className={s.root}>
      <h3 className={s.heading}>Oops! Something went wrong...</h3>
      <p className={s.message}>{message}</p>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
