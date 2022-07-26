import React from "react";
import { Link } from "react-router-dom";
import hboLOGO from "../../src/img/hbo-max-h-w-l.svg";
const Header = () => {
  return (
    <nav id="nav-bar" className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <img className="hbo-logo" src={hboLOGO} alt="" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/login" className="nav-link text-light">
              SIGN IN
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/registration" className="nav-link text-light">
              SIGN UP NOW
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
