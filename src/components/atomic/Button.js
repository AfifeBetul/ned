import React from "react";
import PropTypes from "prop-types";

function Button({ onClick, text, cName = "", iconName }) {
  let customClass = "waves-effect waves-light btn black orange-text " + cName;
  return (
    <a className={customClass} onClick={onClick}>
      {text}
      {iconName && <i className="material-icons left">{iconName}</i>}
    </a>
  );
}

Button.propType = {
  cName: PropTypes.string,
  onClick: PropTypes.func,
  iconName: PropTypes.string,
  text: PropTypes.string
};

export default Button;
