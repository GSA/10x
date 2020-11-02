import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Grid, Row, Col } from "components/Grid";
import Banner from "components/Banner";
import { Link } from "react-router-dom";
import Button from "components/Button";

const Header = ({ logo, nav, hero, className }) => {
  return (
    <header
      className={classnames({
        "usa-header": true,
        [className]: className,
      })}
    >
      <Banner />
      <Grid>
        <Row>
          <Col>
            <Row className="align-content-center margin-top-2">
              <Col size={1}>
                <Link to="/">{logo}</Link>
              </Col>
              <Col size={9}>{nav}</Col>
              <Col size={2}>
                <Button
                  color="primary-lighter"
                  className="margin-top-1"
                  url="/"
                >
                  Submit an idea
                </Button>
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
