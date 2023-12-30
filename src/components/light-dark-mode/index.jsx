import React from "react";
import useLocalStorage from "./useLocalStorage";
import './style.css'
function LightDarkMode() {
  const [theme, settheme] = useLocalStorage("theme", "dark");
  function handleToggle() {
    settheme(theme === "light" ? "dark" : "light");
  }
  console.log(theme);
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>hello world</p>
        <button onClick={handleToggle}>Change Theme</button>
      </div>
    </div>
  );
}

export default LightDarkMode;
