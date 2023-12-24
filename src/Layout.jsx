import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="app__page">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
