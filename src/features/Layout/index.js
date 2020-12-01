import React from "react";
import PropTypes from "prop-types";
import { Grid } from "components/Grid";
import Break from "components/Break";
import Callout from "./templates/Callout";
import Cards from "./templates/Cards";
import Links from "./templates/Links";
import List from "./templates/List";
import Mdx from "features/Mdx";
import ProjectList from "features/ProjectList";
import Title from "./templates/Title";

const components = {
  break: Break,
  callout: Callout,
  cards: Cards,
  links: Links,
  list: List,
  markdown: ({ body, className }) => (
    <div className={className}>
      <Mdx className={className}>{body}</Mdx>
    </div>
  ),
  projects: ProjectList,
  title: Title,
};

const Layout = ({ items }) => {
  return items.map(({ type, fullwidth, ...props }, i) => {
    const Comp = components[type];
    return Comp ? (
      fullwidth ? (
        <Comp key={`txLayout-${++i}`} {...props} />
      ) : (
        <Grid key={`layout-${++i}`}>
          <Comp {...props} />
        </Grid>
      )
    ) : null;
  });
};

Layout.defaultProps = {
  items: [],
};

Layout.propTypes = {
  items: PropTypes.array,
};

export default Layout;
