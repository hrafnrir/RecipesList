import s from "./styles/EmptyList.module.scss";

const EmptyList = () => {
  return (
    <div className={s.root}>
      <p className={s.text}>
        The list of your dishes is empty. Please add a new recipe.
      </p>
    </div>
  );
};

export default EmptyList;
