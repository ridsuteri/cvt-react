import React, { useContext } from "react";
import { LangContext, LangEnums } from "../context/LangContext";

function LangDropdown() {
  const langContext = useContext(LangContext);
  console.log('current lang', langContext.lang)
// console.log(langContext)
  return (
    <div>
      <select onChange={(e)=>langContext.changeLang(e.target.value)}>
        {Object.keys(LangEnums).map((languageKey) => (
          <option key={languageKey} value={LangEnums[languageKey]}>{languageKey}</option>
        ))}
      </select>
    </div>
  );
}

export default LangDropdown;
