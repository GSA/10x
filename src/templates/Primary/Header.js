import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Grid, Row, Col } from "components/Grid";
import Banner from "components/Banner";
import { useHistory } from "react-router-dom";
import Button from "features/Button";
import Link from "features/Link";
import PrimaryNav from "features/PrimaryNav";
import { useDispatch, useSelector } from "react-redux";
import { getMenuList } from "app/MenuModule";
import useOnPathChange from "utils/useOnPathChange";
import Search from "./Search";

const Header = ({ logo, className }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  // For mobile menu
  const [isMenuOpen, setMenuOpen] = useState(false);

  // For menu item with subitems
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  // For menu item matches current path
  const currentMenuItem = history.location.pathname;

  const handleMenuToggle = () => {
    setMenuOpen((state) => !state);
  };

  const handleMenuItemClick = (e) => {
    let id = null;
    /* istanbul ignore next */
    const clicked = e ? e.currentTarget.id : null;

    if (clicked !== id && clicked !== activeMenuItem) {
      id = clicked;
    }
    setActiveMenuItem(id);
  };
  // For mobile menu
  const handleMenuClose = () => {
    handleMenuToggle(false);
    handleMenuItemClick();
  };
  // For menu items
  const handleClick = (e) => {
    console.log("FAAAAART");
    /* istanbul ignore next */
    if (e.preventDefault) {
      e.preventDefault();
    }
    const clicked = e ? e.currentTarget.href : "";
    history.push(`/${clicked}`);
  };

  useOnPathChange(() => {
    handleMenuClose();
  });

  useEffect(() => {
    dispatch(getMenuList({}));
  }, [dispatch]);

  const menus = useSelector((state) => state.menu.data);
  const primary = menus.find(({ key }) => key === "primary");
  const navItems = primary ? primary.items : [];

  return (
    <header
      className={classnames({
        "usa-header": true,
        [className]: className,
      })}
    >
      <Banner />
      <Grid>
        <Row>
          <Col>
            <Row className="align-content-center">
              <Col size={1} className="usa-header__logo">
                <Link url="/">{logo}</Link>
              </Col>
              <Col size={11} className="usa-header__nav">
                <PrimaryNav
                  items={navItems}
                  isMobileMenuOpen={isMenuOpen}
                  handleMobileMenu={handleMenuToggle}
                  activeMenuItem={activeMenuItem}
                  currentMenuItem={currentMenuItem}
                  onMenuItemClick={handleMenuItemClick}
                  onClick={handleClick}
                  renderLink={(data) => {
                    return (
                      <Link url={data.link || ""} onClick={data.onClick}>
                        {data.prefix && (
                          <span className="usa-nav__url-prefix">
                            {data.prefix}
                          </span>
                        )}
                        <span className="usa-nav__url-text">{data.text}</span>
                      </Link>
                    );
                  }}
                  footer={
                    <Row className="flex-align-center">
                      <Col>
                        <Search />
                      </Col>
                      <Col>
                        <Button
                          color="primary-lighter"
                          url="https://feedback.gsa.gov/jfe/form/SV_1Im8dTPnjnV3HpP"
                        >
                          SUBMIT AN IDEA
                        </Button>
                      </Col>
                    </Row>
                  }
                  open={<span className="usa-sr-only">Menu</span>}
                  close={<span className="usa-sr-only">Close</span>}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </header>
  );
};

Header.propTypes = {
  logo: PropTypes.node,
  nav: PropTypes.node,
  hero: PropTypes.node,
};

export default Header;
