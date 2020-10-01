import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getPage } from "app/ContentModule";
import FourOhFour from "routes/FourOhFour";
import Mdx from "features/Mdx";
import { Grid } from "components/Grid";
import Loading from "components/Loading";
import Icon from "components/Icon";
import Button from "components/Button";

const Project = ({ type }) => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const page = useSelector((state) => state.content.page);
  useEffect(() => {
    dispatch(getPage({ type, name }));
  }, [dispatch, name, type]);
  const { pending, data, error } = page;

  const team = data.team || {};
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
      <Grid className={`TxProject TxProject--${name}`}>
        <div className="TxProject__link">
          <Link to="/projects">
            <Icon icon="arrow-left" />
            Return to our projects
          </Link>
        </div>
        <h1 className="TxProject__title">{data.title}</h1>
        <div className="TxProject__subtitle">{data.subtitle}</div>
        <div className="TxProject__meta">Type: {data.projectType}</div>
        <Mdx>{data.body}</Mdx>
        {(team.submitter || team.members) && (
          <div className="TxProject__team">
            <h3>Team</h3>
            <ul>
              <li>
                <div className="TxProject__team-icon">
                  <Icon icon="user" className="margin-right-1" />
                </div>
                <span>
                  <strong>Idea Submitter: </strong> {team.submitter}
                </span>
              </li>
              <li>
                <div className="TxProject__team-icon">
                  <Icon icon="users" className="margin-right-1" />
                </div>
                <span>
                  <strong>Team: </strong> {team.members}
                </span>
              </li>
            </ul>
          </div>
        )}
        {Array.isArray(data.links) && data.links.length && (
          <div className="TxProject__links">
            <h3>Learn More</h3>
            <ol>
              {data.links.map((item) => {
                return (
                  <li className="TxProject__link">
                    <Button variant="link" url={item.link}>
                      {item.text}{" "}
                      <Icon
                        className="margin-left-1"
                        icon="external-link-alt"
                      />
                    </Button>
                  </li>
                );
              })}
            </ol>
          </div>
        )}
      </Grid>
    </div>
  );
};

Project.defaultProps = { type: "project", name: "" };

Project.propTypes = {
  type: PropTypes.string,
};

export default Project;
