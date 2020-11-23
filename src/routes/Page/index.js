import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPage } from "app/ContentModule";
import { Grid } from "components/Grid";
import Loading from "components/Loading";
import Mdx from "features/Mdx";
import FourOhFour from "routes/FourOhFour";
import Head from "routes/Head";

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
        <Head title="Loading..." />
        <h1 className="display-none">Loading...</h1>
        <div className="margin-y-9">
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
      <Head title={data.title} />

      {data.hero && (
        <div className={`Tx__${data.name}-hero`}>
          <Mdx>{data.hero}</Mdx>
        </div>
      )}
      <div className={`Tx__${data.name}-content`}>
        <Mdx>{data.body}</Mdx>
      </div>
    </div>
  );
};

export default Page;
