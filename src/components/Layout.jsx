import { Outlet } from "react-router-dom";

import Header from "./Header/Header.jsx";

import s from "./styles/Layout.module.scss";

const Layout = () => {
  return (
    <div className={s.root}>
      <div className={s.mainBlock}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
