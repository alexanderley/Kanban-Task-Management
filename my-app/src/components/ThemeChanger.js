import React, { useContext, useEffect } from "react";
import { useState } from "react";

import "./ThemeChanger.scss";

import { ReactComponent as LightThemeIcon } from "../img/icon-light-theme.svg";
import { ReactComponent as DarkThemeIcon } from "../img/icon-dark-theme.svg";
import { ThemeContext } from "./context/ThemeContext";

export default function ThemeChanger() {
  const { isLightTheme, setIsLightMode } = useContext(ThemeContext);

  const handleToggle = () => {
    setIsLightMode((prevState) => !prevState);
    console.log(isLightTheme);
  };

  return (
    <div className="themeChanger">
      <LightThemeIcon />
      <div className="toggleSwitchContainer">
        <input type="checkbox" id="switch" onChange={handleToggle} />
        <label htmlFor="switch">Toggle</label>
      </div>
      <DarkThemeIcon />
    </div>
  );
}
