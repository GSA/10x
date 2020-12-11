import React from "react";
import { Grid, Row, Col } from "components/Grid";
import { Helmet } from "react-helmet";
import Card from "components/Card";
import image from "styles/images/portfolio-paint-stroke-1.png";
import { useSelector } from "react-redux";
import Head from "routes/Head";
import Layout from "features/Layout";

const FourOhFour = ({ search }) => {
  const data = useSelector((state) => state.settings["404"]);

  if (search) {
    return (
      <Grid>
        <Helmet title="404 Error" />
        <Row>
          <Col size={12}>
            <div>
              <h1>h1</h1>
              <h2>h2</h2>
              <h3>h3</h3>
              <h4>h4</h4>
              <h5>h5</h5>
              <blockquote>blockquote</blockquote>
              <Card
                title="Card Title"
                subtitle="Card Subtitle"
                image={image}
                imageAlt="Image alt"
                className="width-mobile"
              >
                Card Content
              </Card>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
  console.log(data);
  return (
    <div className={`TxContent Tx__FourOhFour`}>
      <Head title={"404"} />
      <div className={`Tx__FourOhFour-content`}>
        <Layout items={data} />
      </div>
    </div>
  );
};

export default FourOhFour;
