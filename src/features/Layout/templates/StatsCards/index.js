import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Col, Row } from "components/Grid";
import Card from "components/Card";

const StatsCards = ({ title, text, items, className, columns }) => {
  const columnSize = {
    1: "12",
    2: "6",
    3: "4",
    4: "3",
  };
  return (
    <div
      className={classnames({
        TxCards: true,
        TxShadowedCard: true,
        [className]: Boolean(className),
      })}
    >
      {title && <h2>{title}</h2>}
      {text && <div className="margin-bottom-4">{text}</div>}

      <Row>
        {items.map((item, i) => {
          return (
            <Col
              key={`txCards-${i}`}
              className={classnames({ [item.className]: item.className })}
              size="12"
              desktop={columnSize[columns]}
            >
              <Card>
                <div className="text-center">
                  {item.number && <p><strong>{item.number}</strong></p>}
                  {item.title && <p>{item.title}</p>}
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

StatsCards.defaultProps = {
  columns: "2",
  items: [],
};

StatsCards.propTypes = {
  title: PropTypes.node,
  text: PropTypes.node,
  className: PropTypes.node,
  items: PropTypes.array,
};

export default StatsCards;
