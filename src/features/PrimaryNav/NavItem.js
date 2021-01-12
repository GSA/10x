import React from "react";

const NavItem = ({
  data,
  onMenuItemClick,
  onClick,
  id,
  isOpen,
  isCurrent,
  renderLink,
  renderMenuItem,
}) => {
  const { items = [] } = data;

  const Link = renderLink;
  const Button = renderMenuItem;

  return (
    <li className="usa-nav__primary-item">
      {items.length ? (
        <>
          <Button {...data} isCurrent={isCurrent} onClick={onMenuItemClick}>
            {data.text}
          </Button>
          <ul
            id={`extended-nav-section-${id}`}
            className="usa-accordion__content usa-nav__submenu"
            hidden={!isOpen}
          >
            {items.map((item, idx) => (
              <li key={idx} className="usa-nav__submenu-item">
                <Link {...item} isCurrent={isCurrent} onClick={onClick} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link {...data} isCurrent={isCurrent} />
      )}
    </li>
  );
};

NavItem.defaultProps = {
  data: {},
  isOpen: null,
  renderLink: (props) => (
    <a href={props.link} {...props}>
      {props.text}
    </a>
  ),
  renderMenuItem: (props) => <button {...props}>{props.text}</button>,
};

export default NavItem;
