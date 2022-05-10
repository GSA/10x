import React from "react";
import PropTypes from "prop-types";
import { Grid } from "components/Grid";
import Break from "components/Break";
import ByTheNumbersGraphic from "./templates/ByTheNumbersGraphic";
import Callout from "./templates/Callout";
import Cards from "./templates/Cards";
import Links from "./templates/Links";
import List from "./templates/List";
import Mdx from "features/Mdx";
import PhaseDescription from "./templates/PhaseDescription";
import PhaseGraphic from "./templates/PhaseGraphic";
import ProjectList from "features/ProjectList";
import ReportList from "features/ReportList";
import StatsCards from "./templates/StatsCards";
import Title from "./templates/Title";

const components = {
  break: Break,
  byTheNumbersGraphic: ByTheNumbersGraphic,
  callout: Callout,
  cards: Cards,
  links: Links,
  list: List,
  markdown: ({ body, className }) => (
    <div className={className}>
      <Mdx className={className}>{body}</Mdx>
    </div>
  ),
  markdownSpecial: ({ body, className }) => (
    <div className={className}>
      <Mdx className={className}>{body}</Mdx>
    </div>
  ),
  ghostwriter: ({ body }) => (
    <div className="Home__hero">
      <Mdx>{body}</Mdx>
    </div>
  ),
  phaseDescription: PhaseDescription,
  phaseGraphic: PhaseGraphic,
  projects: ProjectList,
  reports: ReportList,
  statsCards: StatsCards,
  title: Title,
};

const Layout = ({ items, data }) => {
  return items.map(({ type, ...props }, i) => {
    const Comp = components[type];
    if (!Comp) {
      console.warn(`Module type "${type}" not defined.`);
      return null;
    }
    return Comp ? (
      type === "ghostwriter" ? (
        <Comp key={`txLayout-${++i}`} {...props} data={data} />
      ) : (
        <Grid key={`layout-${++i}`}>
          <Comp {...props} data={data} />
        </Grid>
      )
    ) : null;
  });
};

Layout.defaultProps = {
  items: [],
  data: {},
};

Layout.propTypes = {
  items: PropTypes.array,
};

export default Layout;
