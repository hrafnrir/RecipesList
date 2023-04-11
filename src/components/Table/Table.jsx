import { useSelector } from "react-redux";

import { selectRecipes } from "../../model/selectors.js";

import TableHeader from "./TableHeader.jsx";
import RecipeItem from "./RecipeItem.jsx";

const Table = () => {
  const recipes = useSelector(selectRecipes).map((item, index) => (
    <RecipeItem key={index} recipe={item} />
  ));

  return (
    <>
      <TableHeader />
      {recipes}
    </>
  );
};

export default Table;
