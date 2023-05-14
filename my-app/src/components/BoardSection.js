import React, { useContext, useState, useRef } from "react";

import "./BoardSection.scss";
import ButtonPrimaryL from "./UI/ButtonPrimaryL";
import { SidebarContext } from "./context/SidebarContext";
import EmptyBoard from "./EmptyBoard";
import Boards from "./Boards";

export default function BoardSection() {
  const { sidebarHidden, setSidebarHidden } = useContext(SidebarContext);

  const sliderRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.classList.add("grabbing");
  };

  const handleMouseUp = (e) => {
    setIsMouseDown(false);
    sliderRef.current.classList.remove("grabbing");
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (!isMouseDown) {
      return;
    }
    const x = e.pageX - sliderRef.current.offsetLeft;
    const scroll = x - startX;
    sliderRef.current.scrollLeft = scrollLeft - scroll;
  };

  return (
    <div>
      <div
        className={"boardsContainer " + (sidebarHidden ? "boardExtend" : "")}
      >
        <div
          className={
            "parent boardsContent " + (sidebarHidden ? "boardsMoveLeft" : "")
          }
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <Boards />
        </div>
      </div>
    </div>
  );
}
