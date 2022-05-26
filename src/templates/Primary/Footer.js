import React, { useEffect } from "react";
import { Grid, Row, Col } from "components/Grid";
import GSAFooter from "./GSAFooter";
import Button from "features/Button";
import Link from "features/Link";
import Icon from "components/Icon";
import { useDispatch, useSelector } from "react-redux";
import Mdx from "features/Mdx";
import { getMenuList } from "app/MenuModule";

const Footer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenuList({}));
  }, [dispatch]);
  const { page = {}, footers } = useSelector(
    ({ content, settings }) => ({
      page: content.page.data,
      footers: settings.footers,
    })
  );
  let data = {};
  const footer = footers.find(({ slug }) =>
    page.footer ? slug === page.footer : slug === "10x-in-the-wild"
  );

  if (footer) {
    data = footer;
  }

  return (
    <div class="usa-identifier">
      <section
        class="usa-identifier__section usa-identifier__section--masthead"
        aria-label="Agency identifier,"
      >
        <div class="usa-identifier__container">
          <div class="usa-identifier__logos">
            <a href="" class="usa-identifier__logo"
              ><img
                class="usa-identifier__logo-img"
                src="/assets/img/circle-gray-20.svg"
                alt="&lt;Parent agency&gt; logo"
                role="img"
            /></a>
          </div>
          <div class="usa-identifier__identity" aria-label="Agency description">
            <p class="usa-identifier__identity-domain">domain.gov</p>
            <p class="usa-identifier__identity-disclaimer">
              An official website of the <a href="">&lt;Parent agency&gt;</a>
            </p>
          </div>
        </div>
      </section>
      <nav
        class="usa-identifier__section usa-identifier__section--required-links"
        aria-label="Important links,"
      >
        <div class="usa-identifier__container">
          <ul class="usa-identifier__required-links-list">
            <li class="usa-identifier__required-links-item">
              <a
                href="javascript:void(0)"
                class="usa-identifier__required-link usa-link"
                >About &lt;Parent shortname&gt;</a
              >
            </li>
            <li class="usa-identifier__required-links-item">
              <a href="" class="usa-identifier__required-link usa-link"
                >Accessibility support</a
              >
            </li>
            <li class="usa-identifier__required-links-item">
              <a href="" class="usa-identifier__required-link usa-link"
                >FOIA requests</a
              >
            </li>
            <li class="usa-identifier__required-links-item">
              <a href="" class="usa-identifier__required-link usa-link"
                >No FEAR Act data</a
              >
            </li>
            <li class="usa-identifier__required-links-item">
              <a href="" class="usa-identifier__required-link usa-link"
                >Office of the Inspector General</a
              >
            </li>
            <li class="usa-identifier__required-links-item">
              <a href="" class="usa-identifier__required-link usa-link"
                >Performance reports</a
              >
            </li>
            <li class="usa-identifier__required-links-item">
              <a href="" class="usa-identifier__required-link usa-link"
                >Privacy policy</a
              >
            </li>
          </ul>
        </div>
      </nav>
      <section
        class="usa-identifier__section usa-identifier__section--usagov"
        aria-label="U.S. government information and services,"
      >
        <div class="usa-identifier__container">
          <div class="usa-identifier__usagov-description">
            Looking for U.S. government information and services?
          </div>
          <a href="https://www.usa.gov/" class="usa-link">Visit USA.gov</a>
        </div>
      </section>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
