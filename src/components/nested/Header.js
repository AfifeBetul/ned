import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Header({ text, to }) {
  return (
    <nav>
      <div className="nav-wrapper black">
        <Link className="brand-logo orange-text center" to={to}>
          {text}
        </Link>
      </div>
    </nav>
  );
}

Header.propType = {
  text: PropTypes.string,
  to: PropTypes.string
};

export default Header;
