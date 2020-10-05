import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Col, Grid, Row } from "components/Grid";
import Image from "components/Image";

const LocationMenu = ({ name }) => {
  const { pathname } = useLocation();
  const simplePath = pathname.replace("/", "");

  const menus = useSelector((state) => state.menu.data);
  const menu = menus.find((d) => d.key === name);

  const items = Boolean(menu)
    ? menu.items.filter((item) =>
        !simplePath ? item.link !== "/" : !simplePath.includes(item.link)
      )
    : [];
  if (!menu) {
    return <span className="display-none">{`Menu ${name} not found.`}</span>;
  }
  return (
    <div className="LocationMenu">
      <Grid>
        <Row gap={2} className="align-items-stretch">
          {items.map((item, i) => (
            <Col key={`${name}-${i}`} size="12" tablet="6" desktop="auto">
              <Link to={item.link} className="LocationMenu__item">
                <Image
                  src={item.img}
                  alt={`link to ${item.text}`}
                  className="LocationMenu__item-img"
                />
                <span className="LocationMenu__item-title">{item.text}</span>
                <span className="LocationMenu__item-desc">{item.desc}</span>
              </Link>
            </Col>
          ))}
        </Row>
      </Grid>
    </div>
  );
};
LocationMenu.defaultProps = {
  name: "primary",
};
LocationMenu.propTypes = {
  name: PropTypes.string,
};

export default LocationMenu;
