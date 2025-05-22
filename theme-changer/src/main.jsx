import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { LangProvider } from "./context/LangContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LangProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </LangProvider>
  </StrictMode>
);
