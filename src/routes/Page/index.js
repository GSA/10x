import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPage } from "app/ContentModule";
import { Grid } from "components/Grid";
import Loading from "components/Loading";
import Mdx from "features/Mdx";
import FourOhFour from "routes/FourOhFour";
import { Helmet } from "react-helmet";

const Page = ({ name }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const pageName = name ? name : params.name;
  const page = useSelector((state) => state.content.page);
  useEffect(() => {
    dispatch(getPage({ name: pageName }));
  }, [dispatch, pageName]);
  const { pending, data, error } = page;
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
    return <FourOhFour pathname={pageName} />;
  }
  return (
    <div className={`TxContent Tx__${pageName}`}>
      <Helmet title={data.title} />
      <Mdx>{data.body}</Mdx>
    </div>
  );
};

export default Page;
