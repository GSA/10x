import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import classnames from "classnames";
import { getPage } from "app/ContentModule";
import FourOhFour from "routes/FourOhFour";
import Mdx from "features/Mdx";
import { Col, Grid, Row } from "components/Grid";
import Loading from "components/Loading";
import Links from "./Links";
import Team from "./Team";
import Phase from "./ProjectStatus";
import Icon from "components/Icon";
import Break from "components/Break";
import Card from "components/Card";

const Project = ({ type }) => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const page = useSelector((state) => state.content.page);
  useEffect(() => {
    dispatch(getPage({ type, name }));
  }, [dispatch, name, type]);
  const { pending, data, error } = page;

  const { meta = {} } = data;

  if (pending) {
    return (
      <Grid>
        <Helmet title="Loading..." />
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
    <div className={`TxContent `}>
      <Helmet title={data.title} />
      <Grid
        className={classnames({
          TxProject: true,
          [`TxProject--${name}`]: true,
          [`TxProject--template-${meta.template}`]: Boolean(meta.template),
        })}
      >
        <div className="TxProject__nav-link">
          <Link to="/projects">
            <Icon icon="arrow-left" />
            Return to our projects
          </Link>
        </div>

        <h1 className="TxProject__subtitle">{data.subtitle}</h1>

        <Row gap="4">
          <Col size="12" desktop="8">
            <h2 className="TxProject__title">{data.title}</h2>
            <p className="TxProject__intro">{data.intro}</p>
            <Break color="accent-cool" variant="wide" />
          </Col>
          {meta.summary && (
            <Col size="12" desktop="4">
              <Card className="TxProject__summary" title="In a nutshell">
                <ul>
                  {meta.summary.map((item) => (
                    <li>
                      <Icon
                        icon="check-circle"
                        className="text-accent-cool margin-right-1"
                      />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Col>
          )}
        </Row>

        <Row gap="4">
          <Col size="12" desktop="8" className="TxProject__content">
            {data.content &&
              data.content.map((item) => (
                <Card title={item.title}>
                  <Mdx>{item.body}</Mdx>
                  {item.phase && <Phase data={meta.phaseData} />}
                </Card>
              ))}
          </Col>

          <Col size="12" desktop="4">
            <div className="TxProject__details">
              <Card>
                <Team data={meta.team} />
              </Card>
              <Break color="base-lighter" variant="wide" />
              <Card>
                <Links data={meta.links} />
              </Card>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

Project.defaultProps = { type: "project", name: "" };

Project.propTypes = {
  type: PropTypes.string,
};

export default Project;
