import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import classnames from "classnames";
import ContentList from "features/ContentList";
import ReportCard from "./ReportCard";

const ReportList = () => {
  const loading = useSelector((state) => state.content.list.pending);
  return (
    <div className={classnames({ ReportList: true, "grid-row": true, " grid-gap": true, isLoading: loading })}>
      <ContentList type="report" sortKey="sortOrder" render={ReportCard} />
    </div>
  );
};

ReportList.propTypes = {
  type: PropTypes.string,
};

export default ReportList;
