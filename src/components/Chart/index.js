import React from 'react';

export default function Chart() {
  return (
    <figure className="bar-chart-from-list" role="figure" aria-labelledby="chartTitle">
      <figcaption className="usa-sr-only">
        Chart of projects kicked off, closed out, and ideas received, by fiscal year from 2017 to 2021
      </figcaption>
      <ul className="bar-chart--vertical">
        <li className="y-axis" aria-hidden="true">
          <span className="y-tick">0</span>
          <span className="y-tick">100</span>
          <span className="y-tick">200</span>
          <span className="y-tick">300</span>
          <span className="y-tick">400</span>
        </li>
        <li className="fy" aria-describedby="FY17_label">
          <h4 className="fy__wrapper-label font-sans-sm" id="FY17_label">FY17</h4>
          <ul className="fy__wrapper">
            <li className="bar-container">
              <span className="bar bg--projects_kicked_off" data-value="20" aria-hidden="true" style={{ height: 5 + '%' }}></span>
              <span className="usa-sr-only">20 Projects Kicked Off</span>
            </li>
            <li className="bar-container">
              <span className="bar bg--projects_closed_out" data-value="17" aria-hidden="true" style={{ height: 4.25 + '%' }}></span>
              <span className="usa-sr-only">17 Projects Closed Out</span>
            </li>
            <li className="bar-container">
              <span className="bar bg--ideas_received" data-value="36" aria-hidden="true" style={{ height: 9 + '%' }}></span>
              <span className="usa-sr-only">36 Ideas Received</span>
            </li>
          </ul>
        </li>
        <li className="fy" aria-describedby="FY18_label">
          <h4 className="fy__wrapper-label font-sans-sm" id="FY18_label">FY18</h4>
          <ul className="fy__wrapper">
            <li className="bar-container">
              <span className="bar bg--projects_kicked_off" data-value="28" aria-hidden="true" style={{ height: 7 + '%' }}></span>
              <span className="usa-sr-only">28 Projects Kicked Off</span>
            </li>
            <li className="bar-container">
              <span className="bar bg--projects_closed_out" data-value="23" aria-hidden="true" style={{ height: 5.75 + '%' }}></span>
              <span className="usa-sr-only">23 Projects Closed Out</span>
            </li>
            <li className="bar-container">
              <span className="bar bg--ideas_received" data-value="146" aria-hidden="true" style={{ height: 36.5 + '%' }}></span>
              <span className="usa-sr-only">146 Ideas Received</span>
            </li>
          </ul>
        </li>
        <li className="fy" aria-describedby="FY19_label">
          <h4 className="fy__wrapper-label font-sans-sm" id="FY19_label">FY19</h4>
          <ul className="fy__wrapper">
            <li className="bar-container">
              <span className="bar bg--projects_kicked_off" data-value="53" aria-hidden="true" style={{ height: 13.25 + '%' }}></span>
              <span className="usa-sr-only">53 Projects Kicked Off</span>
            </li>
            <li className="bar-container">
              <span className="bar bg--projects_closed_out" data-value="51" aria-hidden="true" style={{ height: 12.75 + '%' }}></span>
              <span className="usa-sr-only">51 Projects Closed Out</span>
            </li>
            <li className="bar-container">
              <span className="bar bg--ideas_received" data-value="220" aria-hidden="true" style={{ height: 55 + '%' }}></span>
              <span className="usa-sr-only">220 Ideas Received</span>
            </li>
          </ul>
        </li>
        <li className="fy" aria-describedby="FY20_label">
          <h4 className="fy__wrapper-label font-sans-sm" id="FY20_label">FY20</h4>
          <ul className="fy__wrapper">
            <li className="bar-container">
              <span className="bar bg--projects_kicked_off" data-value="91" aria-hidden="true" style={{ height: 22.75 + '%' }}></span>
              <span className="usa-sr-only">91 Projects Kicked Off</span>
            </li>
            <li className="bar-container">
              <span className="bar bg--projects_closed_out" data-value="88" aria-hidden="true" style={{ height: 22 + '%' }}></span>
              <span className="usa-sr-only">88 Projects Closed Out</span>
            </li>
            <li className="bar-container">
              <span className="bar bg--ideas_received" data-value="365" aria-hidden="true" style={{ height: 91.25 + '%' }}></span>
              <span className="usa-sr-only">365 Ideas Received</span>
            </li>
          </ul>
        </li>
        <li className="fy" aria-describedby="FY21_label">
          <h4 className="fy__wrapper-label font-sans-sm" id="FY21_label">FY21</h4>
          <ul className="fy__wrapper">
            <li className="bar-container">
              <span className="bar bg--projects_kicked_off" data-value="47" aria-hidden="true" style={{ height: 11.75 + '%' }}></span>
              <span className="usa-sr-only">47 Projects Kicked Off</span>
            </li>
            <li className="bar-container">
              <span className="bar bg--projects_closed_out" data-value="46" aria-hidden="true" style={{ height: 11.5 + '%' }}></span>
              <span className="usa-sr-only">46 Projects Closed Out</span>
            </li>
            <li className="bar-container">
              <span className="bar bg--ideas_received" data-value="250" aria-hidden="true" style={{ height: 62.5 + '%' }}></span>
              <span className="usa-sr-only">250 Ideas Received</span>
            </li>
          </ul>
        </li>
      </ul>
      <ul className="bar-chart__legend">
        <li className="font-sans-xs">
          <span className="bar-chart__legend__swatch bg--projects_kicked_off"></span>
          Projects Kicked Off
        </li>
        <li className="font-sans-xs">
          <span className="bar-chart__legend__swatch bg--projects_closed_out"></span>
          Projects Closed Out
        </li>
        <li className="font-sans-xs">
          <span className="bar-chart__legend__swatch bg--ideas_received"></span>
          Ideas Received</li>
      </ul>
    </figure>
  );
}
