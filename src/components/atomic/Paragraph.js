import React from "react";
import PropTypes from "prop-types";

function Paragraph({ children, cName, onClick }) {
  return (
    <p onClick={onClick} className={cName}>
      {children}
    </p>
  );
}

Paragraph.propType = {
  cName: PropTypes.string,
  onClick: PropTypes.func
};

export default Paragraph;
