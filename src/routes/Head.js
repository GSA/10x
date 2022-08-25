import React from "react";
import Helmet from "react-helmet";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import FacebookShareImage from "../styles/images/fb-share-img.png";
import TwitterShareImage from "../styles/images/twitter-share-img.png";

const publicURL = process.env.PUBLIC_URL || "https://10x.gsa.gov";
const branch = process.env.REACT_APP_BRANCH || process.env.BRANCH;
const noFollow = branch !== "main";

const Head = (props) => {
  const page = useSelector((state) => state.content.page.data);
  const { seo = {} } = page;
  const { pathname } = useLocation();

  const siteTitle = "10x - Funding Ideas for Better Public Service";
  const title = seo.title || page.title; // page or site title
  const description = seo.description; // page or site description
  const url = `${publicURL}${pathname}`; // page url/link
  const fbImg = `${publicURL}${FacebookShareImage}`; // page image or site facebook image
  const twImg = `${publicURL}${TwitterShareImage}`; // page image or site twitter image

  return (
    <Helmet {...props}>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta content={url} property="og:url" />
      <meta content={siteTitle} property="og:site_name" />
      <meta content={title} property="og:title" />
      <meta content="article" property="og:type" />
      <meta content={description} property="og:description" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={fbImg} property="og:image" />
      <meta content={twImg} name="twitter:image" />
      {noFollow && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
};

Head.propTypes = {};

export default Head;
