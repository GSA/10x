import React from "react";
import Helmet from "react-helmet";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const publicURL = process.env.PUBLIC_URL  || process.env.BASEURL;
const branch = process.env.REACT_APP_BRANCH || process.env.BRANCH;
const noFollow = branch !== "main";

console.log("branch name is ", branch);

const Head = (props) => {
  const page = useSelector((state) => state.content.page.data);
  const { meta = {} } = page;
  const { pathname } = useLocation();

  const title = page.title; // page or site title
  const description = meta.description; // page or site description
  const url = `${publicURL}${pathname}`; // page url/link
  const fbImg = meta.fbImg; // page image or site facebook image
  const twImg = meta.twImg; // page image or site twitter image

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
      {noFollow && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
};

Head.propTypes = {};

export default Head;
