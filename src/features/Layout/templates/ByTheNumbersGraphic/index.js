import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const ByTheNumbersGraphic = ({ heading, stats }) => {
  return (
    <div className="ByTheNumbersGraphic">
      <h3 className="ByTheNumbersGraphic__heading">{heading}</h3>
      {stats.map((item, i) => (
        <div
          key={i}
          className={classnames({
            ByTheNumbersGraphic__item: true,
            [`ByTheNumbersGraphic__item-${i + 1}`]: true,
          })}
        >
          <div>
            <h3 className="margin-bottom-1">{item.data}</h3>
            <span className="ByTheNumbersGraphic__label">{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

ByTheNumbersGraphic.defaultProps = {
  heading: "Project Journey",
  stats: {
    data: "47",
    label: "Projects kicked off"
  }
};

ByTheNumbersGraphic.propTypes = {
  heading: PropTypes.string,
  stats: PropTypes.array
};

export default ByTheNumbersGraphic;
