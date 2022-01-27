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
              <th scope="col">{item.header3}</th>
              <th scope="col">{item.header4}</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td className={item.highlight ? 'highlight' : null}><span className={item.highlight ? 'text-bold' : null}>{item.data1}</span></td>
              <td className={item.highlight ? 'highlight' : null}><span className={item.highlight ? 'text-bold' : null}>{item.data2}</span></td>
              <td className={item.highlight ? 'highlight' : null}><span className={item.highlight ? 'text-bold' : null}>{item.data3}</span></td>
              <td className={item.highlight ? 'highlight' : null}><span className={item.highlight ? 'text-bold' : null}>{item.data4}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ReportBudgetTable.defaultProps = {
  heading: "10x Projects",
  headers: {
    header1: "Phase",
    header2: "# of Projects",
    header3: "Total $",
    header4: "Total $"
  },
  data: {
    data1: "Phase One",
    data2: "20",
    data3: "$400,000",
    data4: "$400,000"
  }
};

ReportBudgetTable.propTypes = {
  heading: PropTypes.string,
  headers: PropTypes.array,
  data: PropTypes.array
};

export default ReportBudgetTable;
