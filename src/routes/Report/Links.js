import React from "react";
import Link from "features/Link";
import PropTypes from "prop-types";

const Links = ({ data }) => {
  return (
    Array.isArray(data) &&
    data.length && (
      <div className="TxLinks">
        <ul>
          {data.map((item, i) => {
            return (
              <li key={`TxLinks__item-${i}`} className="TxLinks__item">
                <Link url={item.link}>
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
};

Links.defaultProps = {
  data: [],
};

Links.propTypes = {
  data: PropTypes.array,
};

export default Links;
