import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import close from "./close.svg";
import Button from "components/Button";

const NavItem = ({
  data,
  id,
  isOpen,
  isCurrent,
  handleActiveMenuItem,
  handleNav,
  renderText,
}) => {
  const Text = renderText;
  const { link, items = [] } = data;
  return (
    <li className="usa-nav__primary-item">
      {items.length ? (
        <div>
          <button
            id={id}
            className={classnames({
              "usa-accordion__button": true,
              "usa-nav__url": true,
              "usa-current": isCurrent,
            })}
            aria-controls={`extended-nav-section-${id}`}
            aria-expanded={isOpen}
            onClick={handleActiveMenuItem}
          >
            <Text {...data} />
          </button>
          <ul
            id={`extended-nav-section-${id}`}
            className="usa-accordion__content usa-nav__submenu"
            hidden={!isOpen}
          >
            {items.map((item, idx) => (
              <li key={idx} className="usa-nav__submenu-item">
                <button
                  className="usa-nav__submenu-url"
                  value={item.link}
                  onClick={handleNav}
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <button
          id={id}
          value={link}
          onClick={handleNav}
          className={classnames({
            "usa-nav__url": true,
            "usa-current": isCurrent,
          })}
          activeClassName="usa-current"
        >
          <Text {...data} />
        </button>
      )}
    </li>
  );
};

NavItem.defaultProps = {
  data: {},
  isOpen: null,
};

const Nav = ({
  items,
  isMobileMenuOpen,
  handleMobileMenu,
  activeMenuItem,
  handleActiveMenuItem,
  handleNav,
  currentMenuItem,
  renderText,
}) => {
  return (
    <>
      <Button
        type="button"
        id="usa-nav-open"
        onClick={handleMobileMenu}
        className="usa-nav-open"
      >
        Menu
      </Button>
      <nav
        role="navigation"
        aria-label="Primary navigation"
        className={classnames({
          "usa-nav": true,
          "is-visible": isMobileMenuOpen,
        })}
      >
        <div className="usa-nav__inner">
          <Button
            id="usa-nav-close"
            type="button"
            className="usa-nav-close"
            onClick={handleMobileMenu}
          >
            <img src={close} alt="close" />
          </Button>
          <ul className="usa-accordion usa-nav__primary">
            {items.map((item, idx) => {
              const nodeId = `usa-nav-item-${idx}`;
              return (
                <NavItem
                  data={item}
                  key={nodeId}
                  id={nodeId}
                  renderText={renderText}
                  isOpen={activeMenuItem === nodeId}
                  handleActiveMenuItem={handleActiveMenuItem}
                  handleNav={handleNav}
                  isCurrent={currentMenuItem === nodeId}
                />
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

const Text = (item) => item.text;

Nav.defaultProps = {
  items: [],
  renderText: Text,
  isMobileMenuOpen: false,
  handleMobileMenu: () => console.log("handleMobileMenu clicked!"),
  activeMenuItem: null,
  handleActiveMenuItem: () => console.log("handleActiveMenuItem clicked!"),
  handleNav: () => console.log("handleNav clicked!"),
};

Nav.propTypes = {
  items: PropTypes.array,
  renderText: PropTypes.node,
};

export default Nav;
