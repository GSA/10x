import React from "react";
import PropTypes from "prop-types";
import Card from "components/Card";
import ProjectStatus from "./ProjectStatus";
import { Link } from "react-router-dom";

const ProjectCard = ({ data }) => {
  return (
    <Link
      to={data.projectLink || "/our-projects"}
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
            {data.topics.split(",").map((item) => (
              <span className="ProjectCard__tag">{item}</span>
            ))}
          </div>
        )}
      </Card>
    </Link>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.object,
};

export default ProjectCard;
