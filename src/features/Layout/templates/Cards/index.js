import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Col, Row } from "components/Grid";
import Card from "components/Card";
import Button from "components/Button";

const Cards = ({ title, text, items, className }) => {
  return (
    <div
      className={classnames({
        TxContent__cards: true,
        [className]: Boolean(className),
      })}
    >
      {title && <h2>{title}</h2>}
      {text && <div className="margin-bottom-4">{text}</div>}

      <Row>
        {items.map((item, i) => {
          return (
            <Col key={`txCards-${i}`} size="12" desktop="6">
              <Card title={item.title}>
                <Button variant="link" url={item.link}>
                  {item.text}
                </Button>
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
