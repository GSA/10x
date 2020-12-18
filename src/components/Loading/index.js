import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import image from "./loading.png";

export const Loading = ({ className }) => {
  return (
    <div
      className={classnames({
        Loading: true,
        [className]: Boolean(className),
      })}
    >
      <img alt="" src={image} />
    </div>
  );
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
  message: PropTypes.node,
  children: PropTypes.node,
};

export default Loading;
