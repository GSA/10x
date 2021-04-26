import React from "react";
import PropTypes from "prop-types";
import Card from "components/Card";
import Link from "features/Link";
import { Col } from "components/Grid";


const PostCard = ({ data }) => {
  /* istanbul ignore next */
  const slug = data.path + "/";
  const postDate = data.date || Date.now();
  const postDateFormatted = (new Date(postDate)).toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'});
  const excerpt = data.excerpt || data.seo.description;
  /* istanbul ignore next */
  return (
    <Col
      size="12"
      desktop="8"
    >
      <Card className="PostCard desktop:margin-x-neg-2">

        {postDateFormatted && 
          <time className="us-text-h5 display-block" dateTime={postDate}>
            {postDateFormatted}
          </time>}
        
        <Link url={slug} className="margin-top-2 PostCard__link">
          <h2 className="us-text-h3">{data.title}</h2>
        </Link>
        <p className="font-sans-sm line-height-sans-4">{excerpt}</p>
      </Card>
    </Col>
  );
};

PostCard.propTypes = {
  data: PropTypes.object,
};

export default PostCard;
