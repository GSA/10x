import React from "react";
import Icon from "components/Icon";
import PropTypes from "prop-types";

const Nav = ({ data }) => {
  return data.submitter || data.members ? (
    <div className="TxNav">
      <h3>Nav</h3>
      <ul>
        <li>
          <div className="TxNav__icon">
            <Icon icon="user" className="margin-right-1" />
          </div>
          <span className="TxNav__submitter">
            <strong>Idea submitter: </strong> {data.submitter}
          </span>
        </li>
        <li>
          <div className="TxNav__icon">
            <Icon icon="users" className="margin-right-1" />
          </div>
          <span className="TxNav__members">
            <strong>Nav: </strong> {data.members}
          </span>
        </li>
      </ul>
    </div>
  ) : null;
};

Nav.defaultProps = {
  data: {},
};
Nav.propTypes = {
  data: PropTypes.object,
};

export default Nav;
