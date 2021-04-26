import React from "react";
import PropTypes from "prop-types";
import ContentList from "features/ContentList";
import PostCard from "./PostCard";
import { Grid, Row } from "components/Grid";

const PostList = () => {
  return (
    <Grid>
      <Row gap="4" className="PostList TxCards TxShadowedCard">
        <ContentList type="post" sortKey="date" sortOrder="desc" render={PostCard} />
      </Row>
    </Grid>

  );
};

PostList.propTypes = {
  type: PropTypes.string,
};

export default PostList;
