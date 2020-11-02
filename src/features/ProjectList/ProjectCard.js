import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Card from "components/Card";
import Mdx from "features/Mdx";

const ProjectCard = ({ data }) => (
  <Card
    className={classnames({
      ProjectCard: true,
      [`template-${data.template}`]: true,
    })}
    title={data.subtitle}
    subtitle={data.title}
  >
    <div className="ProjectCard__excerpt">
      <Mdx>{data.excerpt}</Mdx>
    </div>
  </Card>
);

ProjectCard.propTypes = {
  data: PropTypes.object,
};

export default ProjectCard;
