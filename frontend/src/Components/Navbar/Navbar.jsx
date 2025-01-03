import React from "react";
import { useState } from "react";
import "./Navbar.css";
import logo from "/src/assets/logo.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <div className="logo-with-name">
        <img src={logo} alt="Logo" />
        <span className="logo-name">QUICK BILL</span>
      </div>
      <div className="navbar-options">
        <ul>
          <li
            onClick={() => {
              setMenu("home");
            }}
          >
            Home {menu === "home" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("features");
            }}
          >
            Features {menu === "features" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("about");
            }}
          >
            About {menu === "about" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("pricing");
            }}
          >
            Pricing {menu === "pricing" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("faq");
            }}
          >
            FAQ's {menu === "faq" ? <hr /> : <></>}{" "}
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <button
          className="login-button"
          onClick={() => {
            console.log("login clicked");
          }}
        >
          Login
        </button>
        <FontAwesomeIcon className="profile" icon={faUser} />
      </div>
    </div>
  );
};

export default Navbar;
