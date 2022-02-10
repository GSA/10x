import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Card from "components/Card";
import Link from "features/Link";

const ReportCard = ({ data }) => {
  /* istanbul ignore next */
  const slug = data.reportUrl || (data.path) + "/";

  return (
    <div
      className={classnames({
        "grid-col-12": true,
        "desktop:grid-col-6": true
      })}>
      <Link url={slug} className="ReportCard__link" target={data.reportUrl ? '_blank' : '_top'}>
        <Card
          className={classnames({
            ReportCard: true,
            [`template-${data.template}`]: true,
          })}
        >
          <h2
            className={classnames({
              "usa-card__heading": true,
              "pdf-icon": data.pdf,
            })}
          >{data.subtitle || data.subtitle}</h2>
          <h3 className="usa-card__subhead">{data.title || data.title}</h3>
          <div className="ReportCard__excerpt">{data.excerpt || data.intro}</div>
        </Card>
      </Link>
    </div>
  );
};

ReportCard.propTypes = {
  data: PropTypes.object,
};

export default ReportCard;
