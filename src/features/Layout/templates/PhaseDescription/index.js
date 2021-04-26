import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Mdx from "features/Mdx";
import { Row, Col } from "components/Grid";

const PhaseDescription = ({
  className,
  subtitle,
  title,
  body,
  ...props
}) => {
  return (
    <Row>
      <Col size={12}>
        <div
          className={classnames({
            "usa-card": true,
            [className]: Boolean(className),
            "TxCards": true,
            "TxRingCards": true
          })}
        >
          <div
            className={classnames({
              "usa-card__container": true,
            })}
          >
            <div className="usa-card__body">
              <span className="TxRingCards__aside">
                <span className="TxRingCards__ring">
                  {subtitle && <span className="us-text-h5">{subtitle}</span>}
                  {title && <span className="us-text-h3">{title}</span>}
                </span>
              </span>

              <Mdx>{body}</Mdx>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

PhaseDescription.defaultProps = {
  variant: "vertical",
  imageAlt: "",
};

PhaseDescription.propTypes = {
  /** classname to be applied to component */
  className: PropTypes.string,
  /** title text or node */
  title: PropTypes.node,
  /** subtitle text or node */
  subtitle: PropTypes.node,
  /** child node */
  body: PropTypes.node,
};

export default PhaseDescription;
