import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const Break = ({ color }) => {
  return (
    <div
      className={classnames({ TxBreak: true, [`TxBreak__${color}`]: color })}
    />
  );
};

Break.propTypes = {
  color: PropTypes.oneOf([
    "primary-lighter",
    "secondary",
    "accent-warm",
    "accent-cool",
    "base-lighter",
  ]),
};

export default Break;
