import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Card from "components/Card";
import Link from "features/Link";

const ProjectCard = ({ data }) => {
  /* istanbul ignore next */
  const slug =  data.projectUrl || ( data.path ) + "/";

  return (
    
    <Link url={slug} className="ProjectCard__link">
      <Card
        className={classnames({
          ProjectCard: true,
          [`template-${data.template}`]: true,
        })}
      >
        <h2 className="usa-card__heading">{data.subtitle || data.subtitle}</h2>
        <h3 className="usa-card__subhead">{data.title || data.title}</h3>
        <div className="ProjectCard__excerpt">{data.excerpt || data.intro}</div>
      </Card>
    </Link>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.object,
};

export default ProjectCard;
