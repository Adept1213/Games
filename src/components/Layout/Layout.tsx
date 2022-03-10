import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import back from "./../../icons/back.svg";
import "./layout.css";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      {pathname !== "/" && (
        <Link to="/">
          <div className="layout__back">
            <img src={back} />
          </div>
        </Link>
      )}
      <Outlet />
    </>
  );
};

export default Layout;
