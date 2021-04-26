import React from "react";
import PropTypes from "prop-types";

const Title = ({ title, subtitle }) => {
  return (
    <div className="desktop:width-tablet-lg">
      {title && <h1>{title}</h1>}
      {subtitle && <p className="TxLede">{subtitle}</p>}
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Title;
