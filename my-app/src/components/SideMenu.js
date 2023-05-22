import React, { useContext, useState } from "react";

import "./SideMenu.scss";

import { ReactComponent as HideSidebar } from "../img/icon-hide-sidebar.svg";
import { ReactComponent as ShowSidebar } from "../img/icon-show-sidebar.svg";
import ThemeChanger from "./ThemeChanger";
import BoardsSelection from "./BoardsSelection";
import { SidebarContext } from "./context/SidebarContext";
import BoardSelectionContent from "./BoardSelectionContent";

export default function Navigation() {
  const { sidebarHidden, setSidebarHidden } = useContext(SidebarContext);

  const handleSidebackHide = () => {
    setSidebarHidden((prevState) => !prevState);
  };

  return (
    <>
      <div className={"sideMenu " + (sidebarHidden && "sidebarHidden")}>
        <div className="topSection">
          <BoardsSelection />
        </div>
        <div className="bottomSection">
          <ThemeChanger />
          <div className="hideSidebar">
            <HideSidebar />
            <span onClick={handleSidebackHide}>Hide Sidebar</span>
          </div>
        </div>
      </div>
      <div
        className={
          "showSidebarIcon " + (sidebarHidden && "showShowSidebarIcon")
        }
        onClick={handleSidebackHide}
      >
        <ShowSidebar />
      </div>
    </>
  );
}
