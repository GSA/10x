import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const ColorBox = ({ variant, outer, middle, inner }) => {
  return (
    <div
      className={classnames({
        ColorBox: true,
        ColorBox__solid: variant === "solid",
      })}
    >
      <div
        className={classnames({
          [`bg-${outer}`]: variant === "solid",
          [`border-${outer}`]: variant === "outline",
          "border-width-0": variant === "solid",
        })}
      >
        <div
          className={classnames({
            [`bg-${middle}`]: variant === "solid",
            [`border-${middle}`]: variant === "outline",
            "border-width-0": variant === "solid",
          })}
        >
          <div
            className={classnames({
              [`bg-${inner}`]: variant === "solid",
              [`border-${inner}`]: variant === "outline",
              "border-width-0": variant === "solid",
            })}
          />
        </div>
      </div>
    </div>
  );
};

ColorBox.defaultProps = {
  variant: "solid",
  outer: "primary-vivid",
  middle: "primary-light",
  inner: "primary-lighter",
};

ColorBox.propTypes = {
  variant: PropTypes.oneOf(["solid", "outline"]),
  outer: PropTypes.string,
  middle: PropTypes.string,
  inner: PropTypes.string,
};

export default ColorBox;
