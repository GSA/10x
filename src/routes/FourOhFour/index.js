import React from "react";
import { Grid, Row, Col } from "components/Grid";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const FourOhFour = ({ pathname }) => {
  const { search } = useLocation();
  return (
    <Grid>
      <Helmet title="404 Error" />
      <Row>
        <Col size={12}>
          {search ? (
            <div>
              <h1>h1</h1>
              <h2>h2</h2>
              <h3>h3</h3>
              <h4>h4</h4>
              <h5>h5</h5>
              <blockquote>blockquote</blockquote>
            </div>
          ) : (
            <div
              className="Page__error"
              style={{ paddingTop: "5vh", minHeight: "50vh" }}
            >
              <h1>404</h1>
              <h2>The path "{pathname}" returned no results.</h2>
            </div>
          )}
        </Col>
      </Row>
    </Grid>
  );
};

export default FourOhFour;
