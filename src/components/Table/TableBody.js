import React from "react";
import TableRow from "./TableRow";

function TableBody(props) {
  return (
    <tbody>
      {props.data.map((item, index) => (
        <TableRow data={item} key={index} searchTerm={props.searchTerm} />
      ))}
    </tbody>
  );
}

export default TableBody;
