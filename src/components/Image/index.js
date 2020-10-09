import React from "react";
import PropTypes from "prop-types";

const Image = ({ src, alt, className }) => {
  const ROOT_URL = "/";
  return <img alt={alt} className={className} src={`${ROOT_URL}/${src}`} />;
};

Image.defaultProp = {
  className: "",
  alt: "none",
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Image;
