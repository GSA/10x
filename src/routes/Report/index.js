import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Head from 'routes/Head';
import classnames from 'classnames';
import { getPage } from 'app/ContentModule';
import FourOhFour from 'routes/FourOhFour';
import { Col, Grid, Row } from 'components/Grid';
import Loading from 'components/Loading';
import Icon from 'components/Icon';
import Break from 'components/Break';
import Chart from 'components/Chart';
import Mdx from 'features/Mdx';
import useScrollToTop from 'utils/useScrollToTop';
import ReasonForRejection from 'features/Layout/templates/ReasonForRejection';
import ReportTable from 'features/Layout/templates/ReportTable';
import ReportBudgetTable from 'features/Layout/templates/ReportBudgetTable';

const Report = ({ type }) => {
  const dispatch = useDispatch();
  const { name } = useParams();
  useEffect(() => {
    dispatch(getPage({ type, name }));
  }, [dispatch, name, type]);
  useScrollToTop();
  const page = useSelector((state) => state.content.page);
  const { pending, data, error } = page;

  if (pending) {
    return (
      <Grid>
        <Head title="Loading..." />
        <div style={{ paddingTop: '15vh', paddingBottom: '15vh' }}>
          <Loading isLoading={true}>
            <span />
          </Loading>
        </div>
      </Grid>
    );
  }
  if (error) {
    return <FourOhFour pathname={name} />;
  }

  return (
    <div className={`TxContent`}>
      <div className="usa-app__bg">
        <Head title={data.title} />
        <Grid
          className={classnames({
            TxReport: true,
            [`TxReport--${name}`]: true,
            [`TxReport--template-${data.template}`]: Boolean(data.template),
          })}
        >
          <Row gap="1" className="report-content">
            <Col size="12" desktop="8">
              <h1 className="TxReport__title">{data.title}</h1>
              <div className="TxReport__intro">
                <Mdx>{data.intro}</Mdx>
              </div>
            </Col>
          </Row>
          <Row gap="4">
            <Col size="12" desktop="3">
              <div id="nav-sticky" className="nav-sticky">
                <h2 className="TxReport__nav-header">{data.navHeader}</h2>
                <div className="TxLinks">
                  {data.nav && (
                    <ul>
                      {data.nav.map((item, i) => (
                        <li className="TxLinks__item" key={i}>
                          <a href={item.link}>{item.text}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Col>
            <Col size="12" desktop="9" className="TxReport__content">
              {data.sections && (
                <div>
                  {data.sections.map((item, i) => (
                    <section
                      key={i}
                      className={classnames({
                        [`${item.class}`]: item.class,
                      })}
                    >
                      <Break color="accent-green" variant="extra-wide" />

                      <h2 id={item.target}>{item.title}</h2>

                      {item.impact && <Mdx>{item.impact}</Mdx>}

                      {item.contentHalf && (
                        <div className="grid-row">
                          <div className="grid-col-6">
                            <Mdx>{item.contentHalf}</Mdx>
                          </div>
                          <div className="grid-col-6 calloutHalf">
                            <Mdx>{item.calloutHalf}</Mdx>
                          </div>
                        </div>
                      )}

                      {item.chart && (
                        <>
                          {item.byTheNumbersList && (
                            <ul>
                              {item.byTheNumbersList.map((li, index) => (
                                <li key={index}>
                                  <Mdx>{li.listItem}</Mdx>
                                </li>
                              ))}
                            </ul>
                          )}

                          <h3>{item.chartHeading}</h3>

                          <Chart></Chart>
                        </>
                      )}

                      <Mdx>{item.content}</Mdx>

                      {item.the10xTeam && <div className={item.the10xTeam}></div>}

                      {item.calloutProject && (
                        <div className="grid-row">
                          <div className="grid-col-12 calloutProject">
                            <h3>{item.calloutProject}</h3>
                          </div>
                        </div>
                      )}

                      {item.reasonForRejection && (
                        <div>
                          <ReasonForRejection data={item.reasonForRejection} />
                        </div>
                      )}

                      {item.calloutFullDark && (
                        <div className="grid-row">
                          <div className="grid-col-12 calloutFullDark">
                            <Mdx>{item.calloutFullDark}</Mdx>
                          </div>
                        </div>
                      )}

                      <Mdx>{item.content2}</Mdx>
                      
                      {item.reportTableData && (
                        <div>
                          <ReportTable
                            heading={item.reportTableHeading}
                            headers={item.reportTableHeaders}
                            data={item.reportTableData}
                          />
                        </div>
                      )}

                      {item.calloutFull && (
                        <div className="grid-row">
                          <div className="grid-col-12 calloutFull">
                            <Mdx>{item.calloutFull}</Mdx>
                          </div>
                        </div>
                      )}

                      {item.image && <div className={item.image}></div>}

                      <Mdx>{item.content3}</Mdx>

                      {item.reportBudgetTableData && (
                        <ReportBudgetTable
                          heading={item.reportBudgetTableHeading}
                          headers={item.reportBudgetTableHeaders}
                          data={item.reportBudgetTableData}
                        />
                      )}

                      {item.otherProjects && (
                        <div className="TxProjects">
                          <h3>Other Projects</h3>
                          <ul>
                            {item.otherProjects.map((project, i) => (
                              <li className="TxLinks__item" key={i}>
                                <a href={project.projectURL}>
                                  {project.projectName}{' '}
                                  <Icon icon="arrow-circle-right" className="margin-left-05" />
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <Mdx>{item.content4}</Mdx>

                      <div className="display-flex flex-justify-end margin-top-2">
                        <a className="usa-button to-top" href="#welcome">
                          TOP
                        </a>
                      </div>
                    </section>
                  ))}
                </div>
              )}
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
};

window.addEventListener('DOMContentLoaded', () => {
  (function () {
    function init() {
      doSmoothScrolling();
      doActiveNav();
    }

    function doSmoothScrolling() {
      document.querySelectorAll('#nav-sticky ul li a').forEach((link) => {
        link.addEventListener('click', (event) => {
          event.preventDefault();
          let target = document.querySelector(event.target.hash);

          let section = target.parentElement;

          section.setAttribute('tabindex', 0);
          section.focus();
          target.scrollIntoView({
            //behavior: 'smooth',
            block: 'start',
          });
        });
      });
      document.querySelectorAll('.to-top').forEach((link) => {
        link.addEventListener('click', (event) => {
          event.preventDefault();
          let target = document.querySelector(event.target.hash);
          target.scrollIntoView({
            //behavior: 'smooth',
            block: 'start',
          });
        });
      });
    }

    function doActiveNav() {
      let fromTopVar = 400; // On scroll, adjust the nav active state / section vertical position

      window.addEventListener('scroll', (event) => {
        let fromTop = window.scrollY;
        document.querySelectorAll('#nav-sticky ul li a').forEach((link, i) => {
          let header = document.querySelector(link.hash);
          let section = header.parentElement;
          if (
            section.offsetTop <= fromTop - fromTopVar &&
            section.offsetTop + section.offsetHeight > fromTop - fromTopVar
          ) {
            link.parentElement.classList.add('active');
          } else {
            link.parentElement.classList.remove('active');
          }
        });
      });
    }

    init();
  })();
});

Report.defaultProps = { type: 'report', name: '' };

Report.propTypes = {
  type: PropTypes.string,
};

export default Report;
