import s from "./styles/Header.module.scss";

const Header = () => {
  return (
    <div className={s.root}>
      <h1 className={s.heading}>Recipes List</h1>
      <input
        className={s.search}
        type="text"
        placeholder="search recipes"
      ></input>
    </div>
  );
};

export default Header;
