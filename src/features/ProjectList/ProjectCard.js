import React from "react";
import PropTypes from "prop-types";
import Card from "components/Card";
import ProjectStatus from "./ProjectStatus";
import Button from "components/Button";
import Mdx from "features/Mdx";

const ProjectCard = ({ data }) => {
  return (
    <Button
      variant="link"
      url={data.projectLink || "/our-projects"}
      className="ProjectCard__link"
    >
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
            <span className="ProjectCard__topics-heading">
              IntendedAudience
            </span>
            {data.topics.split(",").map((item, i) => (
              <span key={`topic-item-${i}`} className="ProjectCard__tag">
                {item}
              </span>
            ))}
          </div>
        )}
      </Card>
    </Button>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.object,
};

export default ProjectCard;
