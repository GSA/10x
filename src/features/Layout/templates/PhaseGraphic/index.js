import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Col, Row } from "components/Grid";
import Mdx from "features/Mdx";

const PhaseGraphic = ({
  items
}) => {
  return (
    <div
      className={classnames({
        TxCallout: true,
        TxCallout__ringer: true
      })}
    >
      {items && (
        <Row className="TxCallout__items">
          {items.map((item, i) => (
            <Col
              key={`txCallout-${i}`}
              className={classnames({ [item.className]: item.className })}
              size="12"
              desktop="auto"
            >
              <div className="display-flex margin-right-2">
                <div className="TxCallout__content">
                  <div className="TxCallout__card-header">
                    {item.subtitle && 
                      <span className="us-text-h5">
                        {item.subtitle}
                      </span>
                    }
                    {item.title && 
                      <span className="us-text-h3">
                        {item.title}
                      </span>
                    }
                    {item.suffix && 
                      <span className="us-text-h3 text-italic margin-bottom-0">
                        {item.suffix}
                      </span>
                    }
                  </div>
                  <Mdx>{item.body}</Mdx>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

PhaseGraphic.defaultProps = {
  items: [],
};

PhaseGraphic.propTypes = {
  items: PropTypes.array,
};

export default PhaseGraphic;
