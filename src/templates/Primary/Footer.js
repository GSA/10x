import React from "react";
import { Grid, Row, Col } from "components/Grid";
import GSAFooter from "./GSAFooter";
import Button from "components/Button";
import Icon from "components/Icon";

const Footer = () => {
  return (
    <footer className="usa-footer">
      <Grid>
        <Row>
          <Col tablet="9">
            <Button variant="link" url="https://code.gov" external>
              Code.gov
            </Button>
            {", "}
            <Button variant="link" url="https://login.gov" external>
              Login.gov
            </Button>
            {", "}
            <Button variant="link" url="https://Pra.digital.gov" external>
              Pra.digital.gov
            </Button>
            {", "}
            <Button variant="link" url="https://federalistapp.18f.gov" external>
              Federalist
            </Button>
            {", and the "}
            <Button
              variant="link"
              url="https://designsystem.digital.gov/"
              external
            >
              U.S. Web Design Standards
            </Button>
            {" all started as ideas submitted to and funded by 10x!"}
          </Col>
          <Col tablet="3" className="text-right">
            <Button url="/projects" color="primary-lighter">
              VIEW PROJECTS
            </Button>
          </Col>
        </Row>
      </Grid>
      <div className="usa-footer__primary">
        <Grid className="usa-footer__primary-content">
          <Row className="padding-y-8">
            <Col>
              <GSAFooter />
            </Col>
          </Row>
          <Row className="text-center desktop:flex-justify padding-bottom-10">
            <Button variant="link" external url="https://10x.gsa.gov">
              {"View No FEAR Act"}
            </Button>
            <Button variant="link" url="/privacy-policy">
              Privacy Policy
            </Button>
            <div>
              {"Built with the "}
              <Button variant="link" external>
                U.S. Web Design System
              </Button>
            </div>
            <Button variant="link" external url="mailto:10x@gsa.gov">
              <Icon icon="envelope" className="margin-right-1" />
              {"Email Us"}
            </Button>
          </Row>
        </Grid>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
