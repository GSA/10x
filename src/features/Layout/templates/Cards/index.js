import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Col, Row } from "components/Grid";
import Card from "components/Card";
import Mdx from "features/Mdx";

const Cards = ({ title, text, items, className }) => {
  return (
    <div
      className={classnames({
        TxCards: true,
        [className]: Boolean(className),
      })}
    >
      {title && <h2>{title}</h2>}
      {text && <div className="margin-bottom-4">{text}</div>}

      <Row>
        {items.map(({ body }, i) => {
          return (
            <Col key={`txCards-${i}`} size="12" desktop="6">
              <Card>
                <Mdx>{body}</Mdx>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

Cards.defaultProps = {
  items: [],
};

Cards.propTypes = {
  title: PropTypes.node,
  text: PropTypes.node,
  className: PropTypes.node,
  items: PropTypes.array,
};

export default Cards;
