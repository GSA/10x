import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import classnames from "classnames";
import ContentList from "features/ContentList";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  const loading = useSelector((state) => state.content.list.pending);
  return (
    <div className={classnames({ ProjectList: true, isLoading: loading })}>
      <ContentList type="project" sortKey="slug" render={ProjectCard} />
    </div>
  );
};

ProjectList.propTypes = {
  type: PropTypes.string,
};

export default ProjectList;
