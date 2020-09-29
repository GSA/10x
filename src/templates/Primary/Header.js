import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Grid, Row, Col } from "components/Grid";
import Banner from "components/Banner";
import { Link } from "react-router-dom";

const Header = ({ logo, nav, hero, className }) => {
  return (
    <header
      className={classnames({
        "usa-header": true,
        "usa-header--basic": true,
        [className]: className,
      })}
    >
      <Grid>
        <Row>
          <Col>
            <Banner />
            <Row className="align-content-center margin-top-2">
              <Col size={3}>
                <Link to="/">{logo}</Link>
              </Col>
              <Col size={9} className="text-right">
                {nav}
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
      {hero}
    </header>
  );
};

Header.propTypes = {
  logo: PropTypes.node,
  nav: PropTypes.node,
  hero: PropTypes.node,
};

export default Header;
