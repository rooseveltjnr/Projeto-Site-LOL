import React, { useState } from "react";
import LOLLOGO from "../assets/images/lol_logo.png";
import GitHubIcon from "@material-ui/icons/GitHub";
function Header() {
  const [isChecked, setisChecked] = useState(false);
  const changeTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";
    console.log(">>currentTheme", currentTheme);
    if (currentTheme === "light" || currentTheme === null) {
      targetTheme = "dark";
      setisChecked(true);
    } else setisChecked(false);

    document.documentElement.setAttribute("data-theme", targetTheme);
  };
  const openGitHub = () => {
    window.open("https://www.github.com/wallisonwilliam/");
  };
  return (
    <>
      <div className="app__header">
        <div className="switch">
          <div className="toggle">
            <label htmlFor="themeSwitch"></label>
            <input type="checkbox" id="themeSwitch" onClick={changeTheme} />
            <div className="toggle-bg"></div>
            <div className="toggle-thumb">
              <i className="fas fa-sun"></i>
              <i className="fas fa-moon"></i>
            </div>
          </div>
        </div>
        <div className="lol__logos noselect">
          <img src={LOLLOGO} className="lol__logo" alt="lollogo" />
        </div>
        <div className="github__box github__icon">
          <GitHubIcon onClick={openGitHub}></GitHubIcon>
        </div>
      </div>
    </>
  );
}

export default Header;
