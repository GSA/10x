import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Grid, Row, Col } from "components/Grid";
import Banner from "components/Banner";
import { Link, useHistory } from "react-router-dom";
import Button from "components/Button";
import PrimaryNav from "components/PrimaryNav";
import { useDispatch, useSelector } from "react-redux";
import { getMenuList } from "app/MenuModule";
import useOnPathChange from "utils/useOnPathChange";
import Icon from "components/Icon";

const Header = ({ logo, className }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleMenuToggle = (v) => {
    setMenuOpen((state) => !state);
  };

  const handleActiveMenuItemClick = (e) => {
    let id = null;
    /* istanbul ignore next */
    const clicked = e ? e.currentTarget.id : null;
    if (clicked !== id && clicked !== activeMenuItem) {
      id = clicked;
    }
    setActiveMenuItem(id);
  };

  const handleMenuClose = () => {
    handleMenuToggle(false);
    handleActiveMenuItemClick();
  };

  const handleNavClick = (e) => {
    /* istanbul ignore next */
    const clicked = e ? e.currentTarget.value : "";
    handleMenuClose();
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
                <Link to="/">{logo}</Link>
              </Col>
              <Col size={11} className="usa-header__nav">
                <PrimaryNav
                  items={navItems}
                  isMobileMenuOpen={isMenuOpen}
                  handleMobileMenu={handleMenuToggle}
                  activeMenuItem={activeMenuItem}
                  handleActiveMenuItem={handleActiveMenuItemClick}
                  handleNav={handleNavClick}
                  renderText={(data) => (
                    <>
                      <span className="usa-nav__url-prefix">{data.prefix}</span>
                      <span className="usa-nav__url-text">{data.text}</span>
                    </>
                  )}
                  footer={
                    <>
                      <form
                        className="usa-search usa-search--small"
                        role="search"
                      >
                        <label
                          className="usa-sr-only"
                          htmlFor="search-field-small"
                        >
                          Search
                        </label>
                        <input
                          className="usa-input"
                          id="search-field-small"
                          type="search"
                          name="search"
                        />
                        <button
                          className="usa-button usa-button--primary-lighter"
                          type="submit"
                        >
                          <Icon icon="search" />
                        </button>
                      </form>
                      <Button
                        color="primary-lighter"
                        url="https://feedback.gsa.gov/jfe/form/SV_1Im8dTPnjnV3HpP"
                      >
                        SUBMIT AN IDEA
                      </Button>
                    </>
                  }
                  open=""
                  close=""
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
