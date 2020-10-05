import React from "react";
import { Grid, Row, Col } from "components/Grid";
import { Helmet } from "react-helmet";

const FourOhFour = ({ pathname }) => {
  return (
    <Grid>
      <Helmet title="404 Error" />
      <Row>
        <Col size={12}>
          <div
            className="Page__error"
            style={{ paddingTop: "5vh", minHeight: "50vh" }}
          >
            <h1>404</h1>
            <h2>The path "{pathname}" returned no results.</h2>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default FourOhFour;
