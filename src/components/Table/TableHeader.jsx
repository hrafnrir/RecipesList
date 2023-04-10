import s from "./styles/TableHeader.module.scss";

const TableHeader = () => {
  return (
    <div className={s.root}>
      <div className={s.headings}>
        <div className={s.column}>name</div>
        <div className={s.column}>dish type</div>
        <div className={s.column}>meal</div>
        <div className={s.column}>kcal</div>
        <div className={s.column}>time</div>
      </div>
    </div>
  );
};

export default TableHeader;
