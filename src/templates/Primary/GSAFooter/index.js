import React, { useState } from "react";
import Button from "components/Button";
import Icon from "components/Icon";
import { Col, Grid, Row } from "components/Grid";
import GSALogo from "./gsa-logo.svg";

const links = [
  {
    text:
      "Report fraud, waster, or abuse to the Office of the Inspector General",
    link: "https://www.gsaig.gov/",
  },
  {
    text: "Submit a Freedom of Information Act (FOIA) request",
    link: "<https://www.gsa.gov/reference/freedom-of-information-act-foia>",
  },
  {
    text: "View budget and performance reports",
    link: "<https://www.gsa.gov/reference/reports/budget-performance>",
  },
  {
    text: "View accessibility statement",
    link: "https://www.gsa.gov/website-information/accessibility-aids",
  },
  {
    text: "View No FEAR Act data",
    link:
      "https://www.gsa.gov/reference/civil-rights-programs/notification-and-federal-employee-antidiscrimination-and-retaliation-act-of-2002",
  },
];
const GSAFooter = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen((state) => !state);
  return (
    <div className="GSAFooter">
      <Grid>
        <Row className="GSAFooter__header" gap="6">
          <Col size="12" tablet="9">
            <div className="display-flex flex-align-center">
              <a
                href="https://www.gsa.gov"
                title="U.S. General Services Administration"
                className="GSAFooter__logo"
              >
                <img
                  src={GSALogo}
                  alt="GSA
                    logo"
                />
              </a>
              <div className="GSAFooter__text">
                10x.gsa.gov is a product of GSA’s
                <a
                  href="https://www.gsa.gov/tts/"
                  className="margin-left-05"
                  title="Technology Transformation Services"
                >
                  Technology Transformation Services
                </a>
                .
              </div>
            </div>
          </Col>
          <Col className="text-right">
            <Button
              className="GSAFooter__toggle"
              color="white"
              variant="outline"
              onClick={handleClick}
            >
              Learn more <Icon icon={!isOpen ? "angle-down" : "angle-up"} />
            </Button>
          </Col>
        </Row>
        {isOpen && (
          <Row className="GSAFooter__content" gap="6">
            <Col tablet="6">
              <p>
                As part of GSA’s Technology Transformation Services (TTS), we
                apply modern methodologies and technologies to improve the
                public’s experience with government. We help agencies make their
                services more accessible, efficient, and effective with modern
                applications, platforms, processes, personnel, and software
                solutions.
                <Button
                  variant="link"
                  className="margin-left-1"
                  color="white"
                  url="https://www.gsa.gov/about-us/organization/federal-acquisition-service/technology-transformation-services"
                  title="Learn more about Technology Transformation Services"
                >
                  Read more
                </Button>
              </p>
            </Col>

            <Col size="12" tablet="6">
              <div className="GSAFooter__links">
                <p>
                  <Icon icon="envelope" /> For questions about this website,
                  email <a href="mailto:10x@gsa.gov">10x@gsa.gov</a>.
                </p>
                <p>
                  Additional information about the U.S. General Services
                  Administration (GSA) can be found at{" "}
                  <a
                    href="https://www.gsa.gov/about"
                    title="More about the GSA"
                  >
                    https://www.gsa.gov/about
                  </a>
                </p>
                <ul>
                  {links.map((item) => (
                    <li>
                      <Button
                        color="white"
                        variant="link"
                        title={item.text}
                        url={item.link}
                      >
                        {item.text}
                      </Button>
                    </li>
                  ))}
                </ul>
                <p>
                  Looking for U.S. government information and services?{" "}
                  <Button
                    url="https://www.usa.gov/contact?ref=18f.gsa.gov"
                    color="white"
                    variant="link"
                  >
                    Visit USA.gov
                  </Button>
                </p>
              </div>
            </Col>
          </Row>
        )}
      </Grid>
    </div>
  );
};

GSAFooter.propTypes = {};

export default GSAFooter;
