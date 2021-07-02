import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link className="brand-logo" to="/">
            Shooz
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/products"> Shop </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
            <li>
              <Link to="/contact"> Contact </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
