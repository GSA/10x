import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Card from "components/Card";
import Link from "features/Link";

const ProjectCard = ({ data }) => {
  /* istanbul ignore next */
  const { card = {} } = data;
  const slug = card.projectUrl || data.path;

  /* istanbul ignore next */
  const excerpt = card.excerpt || data.intro;

  return (
    <Link url={slug} className="ProjectCard__link">
      <Card
        className={classnames({
          ProjectCard: true,
          [`template-${card.template}`]: true,
        })}
      >
        <h2 className="usa-card__heading">{card.subtitle || data.subtitle}</h2>
        <h3 className="usa-card__subhead">{card.title || data.title}</h3>
        <div className="ProjectCard__excerpt">{excerpt}</div>
      </Card>
    </Link>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.object,
};

export default ProjectCard;
