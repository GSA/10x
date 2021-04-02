import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import classnames from "classnames";
import ContentList from "features/ContentList";
import PostCard from "./PostCard";
import { Grid, Row } from "components/Grid";

const PostList = () => {
  const loading = useSelector((state) => state.content.list.pending);
  return (
    <Grid>
      <Row gap="4" className={classnames({ isLoading: loading }), "PostList TxCards TxShadowedCard"}>
        <ContentList type="post" render={PostCard} />
      </Row>
    </Grid>

  );
};

PostList.propTypes = {
  type: PropTypes.string,
};

export default PostList;
