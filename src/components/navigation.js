import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navigation() {
  let menu;
  let menuMask;
  const [showMenu, setShowMenu] = useState(false);
  if (showMenu) {
    menu = (
      <div className="fixed top-0 left-0 bg-white w-4/5 h-full z-50 shadow">
        <ul>
          <li>
            <Link
              className="text-blue-500 p-3 border-b block"
              to="/"
              onClick={() => {
                setShowMenu(false);
              }}
            >
              Permimum Beauty Products
            </Link>
          </li>
          <li>
            <Link
              className="text-blue-500 p-3 border-b block"
              to="/about"
              onClick={() => {
                setShowMenu(false);
              }}
            >
              Shop New With Us
            </Link>
          </li>
          <li>
            <Link
              className="text-blue-500 p-3 border-b block"
              to="/"
              onClick={() => {
                setShowMenu(false);
              }}
            >
              Shop New Gifts
            </Link>
          </li>
        </ul>
      </div>
    );
    menuMask = (
      <div
        onClick={() => setShowMenu(!showMenu)}
        className="bg-black-t fixed top-0 right-0 w-full h-full z-50"
      ></div>
    );
  } else {
    menu = "";
    menuMask = "";
  }
  return (
    <nav>
      <span style={{ fontSize: "32px" }}>
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>
      {menuMask}
      {menu}
    </nav>
  );
}

export default Navigation;
