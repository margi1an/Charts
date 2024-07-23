import React, { useEffect } from "react";
import { useState } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

function local() {
  return localStorage.getItem("theme") || "winter";
}

function Navbar() {
  const [theme, setTheme] = useState(local());
  const handleTheme = () => {
    const newTheme = theme == "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <h1 className="text-2xl font-bold">devfinder</h1>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input
              onClick={handleTheme}
              type="checkbox"
              checked={theme == "dracula"}
            />
            <IoMdSunny className="swap-on fill-current w-7 h-7"></IoMdSunny>
            <IoMdMoon className="swap-off fill-current w-7 h-7"></IoMdMoon>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
