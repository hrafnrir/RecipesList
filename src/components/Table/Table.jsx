import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { selectFilteredRecipes } from "../../model/selectors/recipesSelectors.js";

import TableHeader from "./TableHeader.jsx";
import RecipeItem from "./RecipeItem.jsx";
import EmptyList from "../EmptyList/EmptyList.jsx";

const Table = () => {
  const [searchParams] = useSearchParams();
  let query = {};

  for (const [key, value] of searchParams.entries()) {
    query[key] = value;
  }

  const recipes = useSelector(selectFilteredRecipes(query)).map(
    (item, index) => <RecipeItem key={index} recipe={item} />
  );

  return (
    <>
      {recipes.length ? (
        <>
          <TableHeader />
          {recipes}
        </>
      ) : (
        <EmptyList type="search" searchQuery={query.search} />
      )}
    </>
  );
};

export default Table;
