import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Card from "components/Card";
import { useHistory } from "react-router-dom";

const ProjectCard = ({ data }) => {
  const history = useHistory();
  /* istanbul ignore next */
  const { card = {}, meta = {} } = data;
  const handleClick = () => {
    const slug = card.url || data.slug;
    history.push(`${history.location.pathname}/${slug}`);
  };
  /* istanbul ignore next */
  const excerpt = card.excerpt || data.intro;

  return (
    <Card
      onClick={handleClick}
      className={classnames({
        ProjectCard: true,
        [`template-${meta.template}`]: true,
      })}
      title={card.subtitle || data.subtitle}
      subtitle={card.title || data.title}
    >
      <div className="ProjectCard__excerpt">{excerpt}</div>
    </Card>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.object,
};

export default ProjectCard;
