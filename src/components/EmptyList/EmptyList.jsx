import PropTypes from "prop-types";
import cn from "classnames";

import s from "./styles/EmptyList.module.scss";

const EmptyList = ({ type, searchQuery }) => {
  const description =
    type === "search"
      ? `'${searchQuery}' was not found.`
      : "The list of your dishes is empty. Please add a new recipe.";

  const rootClass = cn(s.root, { [s.root_search]: type === "search" });

  return (
    <div className={rootClass}>
      <p className={s.text}>{description}</p>
    </div>
  );
};

EmptyList.propTypes = {
  type: PropTypes.string.isRequired,
  searchQuery: PropTypes.string,
};

export default EmptyList;
