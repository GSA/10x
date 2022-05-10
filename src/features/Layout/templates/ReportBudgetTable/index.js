import React from "react";
import PropTypes from "prop-types";

const ReportBudgetTable = ({ heading, headers, data }) => {
  return (
    <div className="ReportBudgetTable">
      <h3 className="ReportBudgetTable__heading">{heading}</h3>
      <table className="usa-table usa-table--borderless">
        <thead>
          {headers.map((item, i) => (
            <tr key={i}>
              <th scope="col">{item.header1}</th>
              <th scope="col">{item.header2}</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td className={item.highlight ? 'highlight' : null}><span className={item.highlight ? 'text-bold' : null}>{item.data1}</span></td>
              <td className={item.highlight ? 'highlight' : null}><span className={item.highlight ? 'text-bold' : null}>{item.data2}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ReportBudgetTable.defaultProps = {
  heading: "Other DSF Commitments",
  headers: {
    header1: "Item",
    header2: "Total $",
  },
  data: {
    data1: "Total",
    data2: "$808,889",
  }
};

ReportBudgetTable.propTypes = {
  heading: PropTypes.string,
  headers: PropTypes.array,
  data: PropTypes.array
};

export default ReportBudgetTable;
