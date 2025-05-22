import React, { useContext } from "react";
import Level1 from "./components/Level1";
import { ThemeContext } from "./context/ThemeContext";
import ToggleButton from "./components/ToggleButton";
import "./App.css";
import LangDropdown from "./components/LangDropdown";
import translation from "./utils/translation";
import { LangContext } from "./context/LangContext";

function App() {
  const themeContext = useContext(ThemeContext);
  // console.log("current value of themeContext App: ", themeContext);
  const langContext = useContext(LangContext);
  return (
    <div className={themeContext.theme == "dark" ? "dark-mode body" : "body"}>
      <div style={{ position: "absolute", top: 0, right: 0 }}>
        <LangDropdown />
      </div>
      <div>
        <ToggleButton />
        {translation[langContext.lang]['app']}
        <hr />
        <Level1 />
      </div>
    </div>
  );
}

export default App;
