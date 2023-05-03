import { useSelector } from "react-redux";

import { selectFilteredRecipes } from "../../model/selectors.js";

import TableHeader from "./TableHeader.jsx";
import RecipeItem from "./RecipeItem.jsx";
import EmptyList from "../EmptyList/EmptyList.jsx";

const Table = () => {
  const recipes = useSelector(selectFilteredRecipes).map((item, index) => (
    <RecipeItem key={index} recipe={item} />
  ));

  return (
    <>
      {recipes.length ? (
        <>
          <TableHeader />
          {recipes}
        </>
      ) : (
        <EmptyList type="search" />
      )}
    </>
  );
};

export default Table;
