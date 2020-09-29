import React from "react";
import { Grid, Row, Col } from "components/Grid";
import ColorBox from "components/ColorBox";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="usa-footer">
      <Grid>
        <Row>
          <Col>
            <p>
              10x <Link to="/privacy-policy">privacy policy</Link>
            </p>
            <p>
              10x complies with the{" "}
              <a href="https://www.gsa.gov/about-us/organization/office-of-civil-rights/notification-and-federal-employee-antidiscrimination-and-retaliation-act-of-2002">
                No Fear Act Notification and Federal Employee
                Anti-Discrimination and Retaliation Act of 2002
              </a>
            </p>
            <p>
              Learn more about 10x by sending an email to{" "}
              <a href="mailto:10x@gsa.gov">10x@gsa.gov</a>
            </p>
            <p>
              Built with the{" "}
              <a href="https://designsystem.digital.gov/">
                U.S. Web Design System 2.0 alpha
              </a>
            </p>
            <a href="https://designsystem.digital.gov/" className="uswds-stamp">
              USWDS
            </a>
            <ColorBox variant="outline" />
          </Col>
        </Row>
      </Grid>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
