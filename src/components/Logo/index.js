import React from "react";
import PropTypes from "prop-types";

const Logo = ({ title }) => {
  return (
    <div className="usa-logo" id="basic-logo">
      <em className="usa-logo__text">10x</em>
    </div>
  );
};
Logo.propTypes = {
  title: PropTypes.node,
};

export default Logo;
