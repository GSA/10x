import React from "react";
import PropTypes from "prop-types";
import Card from "components/Card";
import ProjectStatus from "./ProjectStatus";
import Button from "components/Button";
import Mdx from "features/Mdx";

const ProjectCard = ({ data }) => (
  <Card
    className="ProjectCard"
    title={data.title}
    subtitle={data.subtitle}
    meta={`Type: ${data.projectType}`}
    footer={<ProjectStatus data={data.phaseData} />}
  >
    <div className="ProjectCard__excerpt">
      <Mdx>{data.excerpt}</Mdx>
    </div>
    {data.topics && (
      <div className="ProjectCard__topics">
        <span className="ProjectCard__topics-heading">Intended Audience</span>
        {data.topics.split(",").map((item, i) => (
          <span key={`topic-item-${i}`} className="ProjectCard__tag">
            {item}
          </span>
        ))}
      </div>
    )}
  </Card>
);

ProjectCard.propTypes = {
  data: PropTypes.object,
};

export default (props) => {
  if (!props.data.projectLink) {
    return <ProjectCard {...props} />;
  }

  return (
    <Button
      variant="link"
      url={props.data.projectLink}
      className="ProjectCard__link"
    >
      <ProjectCard {...props} />
    </Button>
  );
};
