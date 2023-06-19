import { useSearchParams, useSubmit, Form } from "react-router-dom";

import s from "./styles/SearchField.module.scss";

const SearchField = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const submit = useSubmit();

  const handleChangeSearchQuery = (e) => {
    const prevValues = {};

    for (const [key, value] of searchParams.entries()) {
      if (key === "search") continue;

      prevValues[key] = value;
    }

    submit(
      { search: e.currentTarget.value, ...prevValues },
      {
        method: "get",
        action: "/",
        replace: !(searchQuery === ""),
      }
    );
  };

  return (
    <Form>
      <input
        className={s.search}
        value={searchQuery}
        onChange={handleChangeSearchQuery}
        type="text"
        name="search"
        placeholder="search recipes"
      ></input>
    </Form>
  );
};

export default SearchField;
