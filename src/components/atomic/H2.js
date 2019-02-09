import React from "react";
import PropTypes from "prop-types";

function H2({ children, cName, onClick }) {
  return (
    <h2 onClick={onClick} className={cName}>
      {children}
    </h2>
  );
}

H2.propType = {
  cName: PropTypes.string,
  onClick: PropTypes.func
};

export default H2;
