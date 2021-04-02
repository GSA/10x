import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Mdx from "features/Mdx";
import { Row, Col } from "components/Grid";

const PhaseDescription = ({
  className,
  children,
  image,
  imageAlt,
  meta,
  subtitle,
  title,
  footer,
  variant,
  flat,
  color,
  body,
  ...props
}) => {
  return (
    <Row>
      <Col size={12}>
        <div
          className={classnames({
            "usa-card": true,
            "usa-card--flag": variant === "horizontal",
            "usa-card--no-media": !image,
            "usa-card--no-content": !title && !meta && !children && !body,
            "usa-card--flat": flat,
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
  /** path to image */
  image: PropTypes.string,
  /** image alt description */
  imageAlt: PropTypes.string,
  /** meta text or node */
  meta: PropTypes.node,
  /** title text or node */
  title: PropTypes.node,
  /** subtitle text or node */
  subtitle: PropTypes.node,
  /** footer text or node */
  footer: PropTypes.node,
  /** render variant for card orientation */
  variant: PropTypes.oneOf(["vertical", "horizontal"]),
  /** boolean to display card shadow */
  flat: PropTypes.bool,
  /** child node */
  body: PropTypes.node,
  /** border color variant */
  color: PropTypes.string,
};

export default PhaseDescription;
