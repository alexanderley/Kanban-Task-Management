import React, { useContext } from "react";

import "./Main.scss";

import { ViewportContext } from "./context/ViewportContext";

import SideMenu from "./SideMenu";
import BoardSection from "./BoardSection";

export default function Main() {
  const { viewportWidth, viewportBreakpoint } = useContext(ViewportContext);

  return (
    <main>
      {viewportWidth > viewportBreakpoint ? <SideMenu /> : ""}
      <BoardSection />
    </main>
  );
}
