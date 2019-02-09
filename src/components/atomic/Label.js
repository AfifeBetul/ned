import React from "react";
import PropTypes from "prop-types";

function Label({ children, cName, onClick }) {
  return (
    <span onClick={onClick} className={cName}>
      {children}
    </span>
  );
}

Label.propType = {
  cName: PropTypes.string,
  onClick: PropTypes.func
};

export default Label;
