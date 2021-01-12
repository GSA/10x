import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Card from "components/Card";
import Link from "features/Link";

const ProjectCard = ({ data }) => {
  /* istanbul ignore next */
  const { card = {}, meta = {} } = data;
  const slug = card.projectUrl || data.path;

  /* istanbul ignore next */
  const excerpt = card.excerpt || data.intro;

  return (
    <Link url={slug} variant="link">
      <Card
        className={classnames({
          ProjectCard: true,
          [`template-${meta.template}`]: true,
        })}
      >
        <h3 className="usa-card__heading">{card.subtitle || data.subtitle}</h3>
        <h4 className="usa-card__subhead">{card.title || data.title}</h4>
        <div className="ProjectCard__excerpt">{excerpt}</div>
      </Card>
    </Link>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.object,
};

export default ProjectCard;
