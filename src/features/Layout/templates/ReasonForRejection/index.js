import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Card from 'components/Card';
import Mdx from 'features/Mdx';

const ReasonForRejection = ({ data }) => {
  return (
    <div className="grid-row">
      {data.map((item, i) => (
        <Card
          className={classnames({
            ReasonForRejection: true,
            'grid-col-12': true,
            'desktop:grid-col-4': true,
          })}
          key={i}
        >
          <div
            className={classnames({
              [`card_color--scheme-${item.color}`]: true,
            })}
          >
            <div
              className={classnames({
                borderPercent: true,
                'grid-col-12': true,
                'desktop:grid-col-4': true,
              })}
              style={{ width: `${item.percent}%` }}
            ></div>
            <div
              className={classnames({
                border: true,
              })}
            ></div>
            <div
              className={classnames({
                percent: true,
              })}
            >
              {item.percent}%
            </div>
            <div
              className={classnames({
                heading: true,
              })}
            >
              {item.heading}
            </div>
            <Mdx>{item.data}</Mdx>
          </div>
        </Card>
      ))}
    </div>
  );
};

ReasonForRejection.defaultProps = {
  data: [],
};
/* ReasonForRejection.defaultProps = {
  data: {
    color: "gray",
    percent: "48%",
    heading: "Data & Adoption",
    data: "- Low, no, or unclear demand for service\n- There is not a clear problem or practical solution\n- Potential customers aren’t yet able/willing to adopt solution\n- Potential customers don’t see the problem as urgent or disagree that the problem exists"
  }
}; */

ReasonForRejection.propTypes = {
  data: PropTypes.array,
};

export default ReasonForRejection;
