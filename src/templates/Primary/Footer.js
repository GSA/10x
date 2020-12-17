import React, { useEffect } from "react";
import { Grid, Row, Col } from "components/Grid";
import GSAFooter from "./GSAFooter";
import Button from "components/Button";
import Icon from "components/Icon";
import { useDispatch, useSelector } from "react-redux";
import Mdx from "features/Mdx";
import { getMenuList } from "app/MenuModule";

const Footer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenuList({}));
  }, [dispatch]);
  const { page: { meta = {} } = {}, footers } = useSelector(
    ({ content, settings }) => ({
      page: content.page.data,
      footers: settings.footers,
    })
  );
  let data = {};
  const footer = footers.find(({ slug }) =>
    meta.footer ? slug === meta.footer : slug === "default"
  );

  if (footer) {
    data = footer;
  }

  return (
    <footer className="usa-footer">
      <div>
        <Grid className="u-margin-x-2">
          {data && (
            <Row className="flex-align-center">
              <Col size="12" tablet="9" className="usa-footer__preFooter">
                <Mdx>{data.body}</Mdx>
              </Col>
              <Col
                size="12"
                tablet="3"
                className="text-right padding-top-4 desktop:padding-top-0"
              >
                {data.button && (
                  <Button url={data.button.link} color="primary-lighter">
                    {data.button.text}
                  </Button>
                )}
              </Col>
            </Row>
          )}
        </Grid>
      </div>
      <div className="usa-footer__primary">
        <Grid className="usa-footer__primary-content">
          <Row className="padding-top-8 padding-bottom-3 tablet:padding-y-8">
            <Col>
              <GSAFooter />
            </Col>
          </Row>
          <Row className="usa-footer__links" gap="4">
            <Col size="12" tablet="3">
              <Button url="/" variant="link">
                {
                  "Report fraud, waste, or abuse to the Office of the Inspector General"
                }
              </Button>
            </Col>
            <Col size="12" tablet="3">
              <Button url="/" variant="link">
                {"Submit a Freedom of Information Act (FOIA), request"}
              </Button>
            </Col>
            <Col size="12" tablet="3">
              <Button url="/" variant="link">
                {"View budget and performance reports"}
              </Button>
            </Col>
            <Col size="12" tablet="3">
              <Button
                variant="link"
                className="display-block"
                external
                url="https://10x.gsa.gov"
              >
                {"View accessibility statement"}
              </Button>
              <Button
                variant="link"
                className="display-block "
                external
                url="https://10x.gsa.gov"
              >
                {"View No FEAR Act"}
              </Button>
              <Button
                variant="link"
                className="display-block"
                url="/privacy-policy"
              >
                {"Privacy Policy"}
              </Button>
              <Button
                variant="link"
                className="display-block"
                external
                url="mailto:10x@gsa.gov"
              >
                <Icon icon="envelope" className="margin-right-1" />
                {"Email Us"}
              </Button>
            </Col>
            <div className="usa-footer__bottom-link">
              <div className="display-inline-block margin-right-1">
                {"Looking for U.S. government information and services?  "}
              </div>
              <Button variant="link" url="https://usa.gov">
                Visit USA.gov
              </Button>
            </div>
          </Row>
        </Grid>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
