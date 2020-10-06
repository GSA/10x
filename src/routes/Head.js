import React from "react";
import Helmet from "react-helmet";

const Head = (props) => {
  // TODO get meta data for page/site

  const title = ""; // page or site title
  const description = ""; // page or site description
  const url = ""; // page url/link
  const fbImg = ""; // page image or site facebook image
  const twImg = ""; // page image or site twitter image

  return (
    <Helmet {...props}>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta content={url} property="og:url" />
      <meta content={title} property="og:site_name" />
      <meta content={title} property="og:title" />
      <meta content="article" property="og:type" />
      <meta content={description} property="og:description" />
      <meta content={description} name="twitter:card" />
      <meta content={fbImg} property="og:image" />
      <meta content={twImg} name="twitter:image" />
    </Helmet>
  );
};

Head.propTypes = {};

export default Head;
