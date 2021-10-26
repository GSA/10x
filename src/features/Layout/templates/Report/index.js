import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Col, Row } from "components/Grid";
import Button from "features/Button";
import Mdx from "features/Mdx";

const Report = ({
  className,
  title,
  text,
  items,
  button,
  variant,
}) => {
  return (
    <div
      className={classnames({
        TxCallout: true,
        [`TxCallout__${variant}`]: variant,
        [className]: Boolean(className),
      })}
    >
      {title && <h2>{title}</h2>}
      {text && <div className="margin-bottom-4">{text}</div>}
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
      {button.text && button.link && (
        <div className="text-center margin-top-2 margin-bottom-4">
          <Button variant="outline" url={button.link}>
            {button.text}
          </Button>
        </div>
      )}
    </div>
  );
};

Report.defaultProps = {
  button: {},
  items: [],
  variant: "check",
};

Report.propTypes = {
  className: PropTypes.string,
  title: PropTypes.node,
  text: PropTypes.node,
  button: PropTypes.object,
  items: PropTypes.array,
  variant: PropTypes.oneOf(["check", "none", "number", "check check-with-background"]),
};

export default Report;
