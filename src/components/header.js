import React from "react";
import Navigation from "./navigation";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div
        className="flex justify-between p-3"
        style={{ alignItems: "center" }}
      >
        <Link to="/">
          <img className="logo" src="../imgs/logo.jpg" alt="logo" />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
