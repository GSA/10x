import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPage } from "app/ContentModule";
import { Col, Grid, Row } from "components/Grid";
import Break from "components/Break";
import Loading from "components/Loading";
import FourOhFour from "routes/FourOhFour";
import Head from "routes/Head";
import Layout from "features/Layout";
import useScrollToTop from "utils/useScrollToTop";
import Title from "features/Layout/templates/Title";

const Post = ({ type }) => {
  const dispatch = useDispatch();
  const { name } = useParams();
  useEffect(() => {
    dispatch(getPage({ type, name }));
  }, [dispatch, name, type]);
  useScrollToTop();
  const page = useSelector((state) => state.content.page);
  const { pending, data, error } = page;

  const postDate = data.date || Date.now();
  const postDateFormatted = (new Date(postDate)).toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'});

  if (pending) {
    return (
      <Grid>
        <Head title="Loading..." />
        <div className="margin-y-9 margin-x-auto">
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
    <div className="TxContent Tx__Post">
      <div className="usa-app__bg">
        <Grid>
          <Row gap="4">
            <Col size="12">
              <Head title={data.title} />
              <Title title={data.title} />
              <time className="margin-bottom-0 margin-top-4 display-block font-sans-md" dateTime={postDate}>
                {postDateFormatted}
              </time>
            </Col>
          </Row>
          <Row>
            <Col size="1" className="margin-bottom-3">
              <Break color="base-lighter"/>
            </Col>
          </Row>
        </Grid>
        <div className="Tx__Post-content">
          <Layout items={data.sections} />
        </div>
      </div>
    </div>
  );
};

Post.defaultProps = { type: "post", name: "" };

Post.propTypes = {
  type: PropTypes.string,
};

export default Post;
