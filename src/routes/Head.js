import React from "react";
import Helmet from "react-helmet";

/**
 * 
    <!-- Social media metadata -->
    <meta content="{{ site.title }}" property="og:site_name" />
    {% if page.title %}
    <meta content="{{ page.title }}" property="og:title" />
    <meta content="article" property="og:type" />
    {% else %}
    <meta content="{{ site.title }}" property="og:title" />
    <meta content="website" property="og:type" />
    {% endif %} {% if page.description %}
    <meta content="{{ page.description }}" property="og:description" />
    <meta content="{{ page.description }}" name="twitter:card" />
    {% else %}
    <meta content="{{ site.description }}" property="og:description" />
    <meta content="{{ site.description }}" name="twitter:card" />
    {% endif %} {% if page.url %}
    <meta content="{{ site.url }}{{ page.url }}" property="og:url" />
    {% endif %} {% if page.image %} {% comment %} facebook: [1200x627].jpg {%
    endcomment %} {% comment %} twitter: [1024x512].jpg {% endcomment %}
    <meta content="/img/{{ page.image }}" property="og:image" />
    <meta content="/img/{{ page.image }}" name="twitter:image" />
    {% else %}
    <meta content="/img/10x-image-facebook.jpg" property="og:image" />
    <meta content="/img/10x-image-twitter.png" name="twitter:image" />
    {% endif %}
 */
const Head = () => {
  return <Helmet />;
};

Head.propTypes = {};

export default Head;
