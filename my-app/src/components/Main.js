import React from "react";

import "./Main.scss";

import SideMenu from "./SideMenu";
import BoardSection from "./BoardSection";

export default function Main() {
  return (
    <main>
      <SideMenu />
      <BoardSection />
    </main>
  );
}
