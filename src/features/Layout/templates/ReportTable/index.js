import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const ReportTable = ({ heading, headers, data }) => {
  return (
    <div className="ReportTable">
      <h3 className="ReportTable__heading">{heading}</h3>
      <table className="usa-table usa-table--borderless">
          {headers.map((item, i) => (
            <thead>
              <th scope="col">{item.header1}</th>
              <th scope="col">{item.header2}</th>
              <th scope="col">{item.header3}</th>
            </thead>
          ))}
        <tbody>
          {data.map((item, i) => (
            <tr>
              <td>{item.data1}</td>
              <td>{item.data2}</td>
              <td>{item.data3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ReportTable.defaultProps = {
  heading: "10x Projects",
  headers: {
    header1: "Phase",
    header2: "# of Projects",
    header3: "Total $"
  },
  data: {
    data1: "Phase One",
    data2: "20",
    data3: "$400,000"
  }
};

ReportTable.propTypes = {
  heading: PropTypes.string,
  headers: PropTypes.object,
  data: PropTypes.object
};

export default ReportTable;
