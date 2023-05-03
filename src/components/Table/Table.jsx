import { useSelector } from "react-redux";

import { selectFilteredRecipes } from "../../model/selectors.js";

import TableHeader from "./TableHeader.jsx";
import RecipeItem from "./RecipeItem.jsx";

const Table = () => {
  const recipes = useSelector(selectFilteredRecipes).map((item, index) => (
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
