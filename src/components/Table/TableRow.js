import React from "react";
import { capitalizeString } from "../../utils/helpers";

function TableRow(props) {
  return (
    <tr>
      {Object.values(props.data).map((entry, index) => {
        return <td key={index}>{capitalizeString(entry)}</td>;
      })}
    </tr>
  );
}

export default TableRow;
