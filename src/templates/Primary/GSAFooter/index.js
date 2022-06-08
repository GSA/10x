import Link from 'features/Link';
import React from 'react';
import GSALogo from './gsa-logo.svg';

const GSAFooter = () => {
  return (
    <div className="GSAFooter">
      <section
        className="usa-identifier__section usa-identifier__section--masthead"
        aria-label="Agency identifier,"
      >
        <div className="usa-identifier__container">
          <div className="usa-identifier__logos">
            <a href="/" className="usa-identifier__logo GSAFooter__logo">
              <img src={GSALogo} alt="GSA logo" />
            </a>
          </div>
          <div className="usa-identifier__identity" aria-label="Agency description">
            <p className="usa-identifier__identity-domain">10x.gsa.gov</p>
            <p className="usa-identifier__identity-disclaimer">
              An official website of the{' '}
              <a href="https://gsa.gov/tts">Technology Transformation Services</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

GSAFooter.propTypes = {};

export default GSAFooter;
