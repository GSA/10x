import React from "react";
import PropTypes from "prop-types";
import Mdx from "features/Mdx";

const Title = ({ title, subtitle }) => {
  return (
    <div className="desktop:width-tablet-lg">
      {title && <h1>{title}</h1>}
      {subtitle && <div className="TxLede"><Mdx>{subtitle}</Mdx></div>}
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Title;
