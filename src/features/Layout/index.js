import React from "react";
import PropTypes from "prop-types";
import Break from "components/Break";
import Mdx from "features/Mdx";
import ProjectList from "features/ProjectList";
import { Grid } from "components/Grid";
import Callout from "./templates/Callout";
import Cards from "./templates/Cards";
import Links from "./templates/Links";
import Title from "./templates/Title";

const components = {
  break: Break,
  markdown: ({ body, className }) => (
    <div className={className}>
      <Mdx className={className}>{body}</Mdx>
    </div>
  ),
  projects: ProjectList,
  callout: Callout,
  cards: Cards,
  title: Title,
  links: Links,
};

const Layout = ({ items }) => {
  return items.map(({ type, fullwidth, ...props }, i) => {
    const Comp = components[type];
    console.log("FULLWIDTH", fullwidth, type);
    return Comp ? (
      fullwidth ? (
        <Comp key={`layout-${++i}`} {...props} />
      ) : (
        <Grid>
          <Comp key={`layout-${++i}`} {...props} />
        </Grid>
      )
    ) : null;
  });
};

Layout.defaultProps = {
  items: [],
};

Layout.propTypes = {};

export default Layout;
