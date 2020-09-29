import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export const Loading = ({ isLoading, className, children }) => {
  if (isLoading) {
    return (
      <div
        className={classnames({
          Loading: true,
          [className]: Boolean(className),
        })}
      >
        <div className="Loading_box">
          <div className="box box-one" />
          <div className="box box-two" />
          <div className="box box-three" />
          <div className="box box-four" />
        </div>
      </div>
    );
  }
  return children;
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
  message: PropTypes.node,
  children: PropTypes.node,
};

export default Loading;
