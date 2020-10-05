import React, { useState } from "react";
import classnames from "classnames";
import Button from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((state) => !state);
  };

  return (
    <section className="usa-banner" aria-label="Official government website">
      <div className="usa-accordion">
        <header className="usa-banner__header">
          <div className="grid-row padding-x-2 align-items-center">
            <div className="grid-col-7 tablet:grid-col-9 padding-y-1">
              <div className="usa-banner__header-text">
                <span className="usa-banner__flag">:flag:</span>
                <span>An official website of the United States government</span>
              </div>
            </div>
            <div className="grid-col-5 tablet:grid-col-3 text-right">
              <Button
                className="usa-banner__button"
                onClick={handleClick}
                aria-expanded="false"
                aria-controls="gov-banner"
                variant="outline"
                id="gov-banner-button"
              >
                Here’s how you know
              </Button>
            </div>
          </div>
        </header>
        <div
          className={classnames({
            "usa-banner__content": true,
            "usa-accordion__content": true,
            "is-visible": isOpen,
          })}
          id="gov-banner"
        >
          <div>
            <span className="usa-banner__content-heading">
              Official websites use .gov
            </span>
            <br />A <strong>.gov</strong> website belongs to an official
            government organization in the United States.
          </div>
          <div>
            <span className="usa-banner__content-heading">
              Secure .gov websites use HTTPS
            </span>
            <br />A <strong>lock</strong> ( <FontAwesomeIcon icon="lock" /> ) or{" "}
            <strong>https://</strong> means you’ve safely connected to the .gov
            website. Share sensitive information only on official, secure
            websites.
          </div>
        </div>
      </div>
    </section>
  );
};

Banner.propTypes = {};

export default Banner;
