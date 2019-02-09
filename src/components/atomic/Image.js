import React from "react";
import PropTypes from "prop-types";

function Image({ src, alt, cName, onClick }) {
  return <img onClick={onClick} src={src} alt={alt} className={cName} />;
}

Image.propType = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  cName: PropTypes.string,
  alt: PropTypes.string
};

export default Image;
