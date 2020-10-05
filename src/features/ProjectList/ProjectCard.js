import React from "react";
import PropTypes from "prop-types";
import Card from "components/Card";
import ProjectStatus from "./ProjectStatus";
import Button from "components/Button";

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
        <div className="ProjectCard__excerpt">{data.excerpt}</div>
        {data.topics && (
          <div className="ProjectCard__topics">
            <span className="ProjectCard__topics-heading">
              Topics & Audience
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
