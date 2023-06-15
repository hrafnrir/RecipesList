import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import cn from "classnames";

import { selectRecipeImage } from "../../model/selectors/recipesSelectors.js";

import s from "./styles/ImagePopup.module.scss";

const ImagePopup = () => {
  const [visibility, setVisibility] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const recipeId = pathname.split("/")[2];
  const { image, name } = useSelector(selectRecipeImage(recipeId));

  const picture = useRef(null);

  useEffect(() => {
    setVisibility(true);

    return () => setVisibility(false);
  }, []);

  useEffect(() => {
    const handleKeyUp = (e) => {
      visibility && e.key === "Escape" && navigate(-1);
    };

    const handleClick = (e) => {
      visibility && !picture.current.contains(e.target) && navigate(-1);
    };

    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("click", handleClick);
    };
  }, [visibility]);

  const rootClass = cn(s.root, { [s.root_visible]: visibility });
  const mainWrapperClass = cn(s.mainWrapper, {
    [s.mainWrapper_visible]: visibility,
  });

  return createPortal(
    <div className={rootClass}>
      <div className={mainWrapperClass}>
        <img className={s.image} ref={picture} src={image} alt={name} />
        <button className={s.closeBtn}></button>
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default ImagePopup;
