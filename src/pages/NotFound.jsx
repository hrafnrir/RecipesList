import { Link } from "react-router-dom";

import s from "./styles/NotFound.module.scss";

export const NotFound = () => {
  return (
    <div className={s.root}>
      <div className={s.heading}>
        <span className={s.char}>4</span>
        <span className={s.char}>0</span>
        <span className={s.char}>4</span>
      </div>
      <p className={s.description}>Oops! That page is gone.</p>
      <Link to="/" className={s.backButton}>
        back to homepage
      </Link>
    </div>
  );
};
