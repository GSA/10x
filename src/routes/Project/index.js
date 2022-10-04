import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Head from "routes/Head";
import classnames from "classnames";
import { getPage } from "app/ContentModule";
import FourOhFour from "routes/FourOhFour";
import { Col, Grid, Row } from "components/Grid";
import Loading from "components/Loading";
import Links from "./Links";
import Team from "./Team";
import Icon from "components/Icon";
import Break from "components/Break";
import Card from "components/Card";
import Mdx from "features/Mdx";
import useScrollToTop from "utils/useScrollToTop";
import PhaseStatus from "features/Layout/templates/PhaseStatus";

const Project = ({ type }) => {
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
        <div style={{ paddingTop: "15vh", paddingBottom: "15vh" }}>
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
            TxProject: true,
            [`TxProject--${name}`]: true,
            [`TxProject--template-${data.template}`]: Boolean(data.template),
          })}
        >
          <div className="TxProject__nav-link">
            <Link to="/projects/">
              <Icon icon="arrow-left" />
              Return to our projects
            </Link>
          </div>

          <h1 className="TxProject__subtitle">{data.subtitle}</h1>

          <Row gap="4">
            <Col size="12" desktop="8">
              <h2 className="TxProject__title">{data.title}</h2>
              <p className="TxProject__intro"><Mdx>{data.intro}</Mdx></p>
              <Break color="accent-cool" variant="wide" />
            </Col>
            {data.summary && (
              <Col size="12" desktop="4">
                <aside aria-label="Project summary">
                  <Card className="TxProject__summary" title="In a nutshell">
                    <ul>
                      {data.summary.map((item, i) => (
                        <li key={`summary-${i}`}>
                          <Icon
                            icon="check-circle"
                            className="text-accent-cool margin-right-1"
                          />
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </aside>
              </Col>
            )}
          </Row>

          <Row gap="4">
            <Col size="12" desktop="8" className="TxProject__content">
              {data.impact &&
                <Card>
                   <Mdx>{data.impact}</Mdx>
                </Card>
              }

              {data.approach &&
                <Card>
                   <Mdx>{data.approach}</Mdx>
                   <PhaseStatus data={data.phaseData} />
                </Card>
              }

              {data.future &&
                <Card>
                   <Mdx>{data.future}</Mdx>
                </Card>
              }
            </Col>

            <Col size="12" desktop="4">
              <aside aria-label="Project details" className="TxProject__details">
                {data.team &&
                  <Card>
                    <Team data={data.team} />
                  </Card>
                }
                <Break color="base-lighter" variant="wide" />
                {data.links &&
                  <Card>
                    <Links data={data.links} />
                  </Card>
                }
              </aside>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
};

Project.defaultProps = { type: "project", name: "" };

Project.propTypes = {
  type: PropTypes.string,
};

export default Project;
