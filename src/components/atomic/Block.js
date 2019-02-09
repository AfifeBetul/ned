import React from "react";
import PropTypes from "prop-types";

function Block({ children, cName, onClick }) {
  return (
    <div onClick={onClick} className={cName}>
      {children}
    </div>
  );
}

Block.propType = {
  cName: PropTypes.string,
  onClick: PropTypes.func
};

export default Block;
