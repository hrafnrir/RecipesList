import { useSearchParams, useSubmit, Form } from "react-router-dom";

import s from "./styles/SearchField.module.scss";

const SearchField = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const submit = useSubmit();

  const handleChangeSearchQuery = (e) => {
    submit(e.currentTarget.form, {
      replace: !(searchQuery === ""),
    });
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
