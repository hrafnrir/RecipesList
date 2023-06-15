import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { selectRecipes } from "../../model/selectors/recipesSelectors.js";

import TableHeader from "./TableHeader.jsx";
import RecipeItem from "./RecipeItem.jsx";
import EmptyList from "../EmptyList/EmptyList.jsx";

const Table = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const recipes = useSelector(selectRecipes)
    .filter((item) =>
      item.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
    )
    .map((item, index) => <RecipeItem key={index} recipe={item} />);

  return (
    <>
      {recipes.length ? (
        <>
          <TableHeader />
          {recipes}
        </>
      ) : (
        <EmptyList type="search" searchQuery={searchQuery} />
      )}
    </>
  );
};

export default Table;
