import React from "react";
import PropTypes from "prop-types";
import Mdx from "features/Mdx";

const Title = ({ title, subtitle }) => {
  return (
    <div className="desktop:width-tablet-lg">
      {title && <h1>{title}</h1>}
      {subtitle && <p className="TxLede"><Mdx>{subtitle}</Mdx></p>}
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Title;
