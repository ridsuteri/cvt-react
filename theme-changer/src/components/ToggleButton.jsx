import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import translation from "../utils/translation";
import { LangContext } from "../context/LangContext";

function ToggleButton() {
  const themeContext = useContext(ThemeContext);
  const langContext = useContext(LangContext);

  const checkTheme = ()=>{
    return themeContext.theme == 'light' ? false : true
  }

  return (
    <div>
      <label htmlFor="toggleBtn">{translation[langContext.lang]['toggleBtn']}</label>
      <input type="checkbox" name="" id="toggleBtn" onChange={()=>themeContext.toggleTheme()} checked={checkTheme()} />
    </div>
  );
}

export default ToggleButton;
