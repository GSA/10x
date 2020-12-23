import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Card from "components/Card";
import { useHistory } from "react-router-dom";

const ProjectCard = ({ data, tabOrder }) => {
  const history = useHistory();
  /* istanbul ignore next */
  const { card = {}, meta = {} } = data;
  const handleClick = () => {
    const slug = card.projectUrl || data.slug;

    if (slug.includes("://")) {
      window.location.assign(slug);
    } else {
      history.push(`${history.location.pathname}/${slug}`);
    }
  };
  /* istanbul ignore next */
  const excerpt = card.excerpt || data.intro;

  return (
    <Card
      tabIndex="0"
      onClick={handleClick}
      onKeyDown={handleClick}
      className={classnames({
        ProjectCard: true,
        [`template-${meta.template}`]: true,
      })}
    >
      <h3 className="usa-card__heading">{card.subtitle || data.subtitle}</h3>
      <h4 className="usa-card__subhead">{card.title || data.title}</h4>
      <div className="ProjectCard__excerpt">{excerpt}</div>
    </Card>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.object,
};

export default ProjectCard;
