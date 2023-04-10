import FormPopupContent from "./FormPopup/FormPopup.jsx";

import s from "./styles/Popup.module.scss";

const Popup = () => {
  return (
    <div className={s.root}>
      <div className={s.mainWrapper}>
        <div className={s.mainBlock}>
          <FormPopupContent />
          <button className={s.closeBtn}></button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
