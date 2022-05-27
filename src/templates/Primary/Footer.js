import React, { useEffect } from 'react';
import { Grid, Row, Col } from 'components/Grid';
import GSAFooter from './GSAFooter';
import Button from 'features/Button';
import Link from 'features/Link';
import Icon from 'components/Icon';
import { useDispatch, useSelector } from 'react-redux';
import Mdx from 'features/Mdx';
import { getMenuList } from 'app/MenuModule';

const Footer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenuList({}));
  }, [dispatch]);
  const { page = {}, footers } = useSelector(({ content, settings }) => ({
    page: content.page.data,
    footers: settings.footers,
  }));
  let data = {};
  const footer = footers.find(({ slug }) =>
    page.footer ? slug === page.footer : slug === '10x-in-the-wild'
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
              <Col size="12" tablet="3" className="text-right padding-top-4 desktop:padding-top-0">
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

      <div class="usa-identifier usa-footer__primary">
        <Grid className="usa-footer__primary-content">
          <div class="grid-row padding-top-4 padding-bottom-3 tablet:padding-y-4">
            <GSAFooter />
          </div>

          <nav
            class="usa-identifier__section usa-identifier__section--required-links"
            aria-label="Important links,"
          >
            <div class="usa-identifier__container">
              <ul class="usa-identifier__required-links-list">
                <li class="usa-identifier__required-links-item">
                  <a
                    href="https://www.gsa.gov/about-us"
                    class="usa-identifier__required-link usa-link"
                  >
                    About GSA
                  </a>
                </li>
                <li class="usa-identifier__required-links-item">
                  <a
                    href="https://www.gsa.gov/website-information/accessibility-aids"
                    class="usa-identifier__required-link usa-link"
                  >
                    Accessibility support
                  </a>
                </li>
                <li class="usa-identifier__required-links-item">
                  <a
                    href="https://www.gsa.gov/reference/freedom-of-information-act-foia"
                    class="usa-identifier__required-link usa-link"
                  >
                    FOIA requests
                  </a>
                </li>
                <li class="usa-identifier__required-links-item">
                  <a
                    href="https://www.gsa.gov/reference/civil-rights-programs/notification-and-federal-employee-antidiscrimination-and-retaliation-act-of-2002"
                    class="usa-identifier__required-link usa-link"
                  >
                    No FEAR Act data
                  </a>
                </li>
                <li class="usa-identifier__required-links-item">
                  <a href="https://www.gsaig.gov/" class="usa-identifier__required-link usa-link">
                    Office of the Inspector General
                  </a>
                </li>
                <li class="usa-identifier__required-links-item">
                  <a
                    href="https://www.gsa.gov/reference/reports/budget-performance"
                    class="usa-identifier__required-link usa-link"
                  >
                    Performance reports
                  </a>
                </li>
                <li class="usa-identifier__required-links-item">
                  <a
                    href="https://10x.gsa.gov/privacy-policy/"
                    class="usa-identifier__required-link usa-link"
                  >
                    Privacy policy
                  </a>
                </li>
                <li class="usa-identifier__required-links-item">
                  <Link className="display-block" external url="mailto:10x@gsa.gov">
                    <Icon icon="envelope" className="margin-right-1" />
                    {'Email Us'}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <section
            class="usa-identifier__section usa-identifier__section--usagov"
            aria-label="U.S. government information and services,"
          >
            <div class="usa-identifier__container">
              <div class="usa-identifier__usagov-description">
                Looking for U.S. government information and services?
              </div>{' '}
              <a href="https://www.usa.gov/" class="usa-link">
                Visit USA.gov
              </a>
            </div>
          </section>
        </Grid>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
