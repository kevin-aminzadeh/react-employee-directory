import React from "react";
import { capitalizeString } from "../../utils/helpers";

function TableHead(props) {
  return (
    <thead>
      <tr>
        {props.columns.map((column, index) => (
          <th scope="col" key={index}>
            <button
              className="border-0 bg-transparent"
              data-column={column.value}
              onClick={props.handleSort}
            >
              <span className="fw-bold text-secondary">
                {capitalizeString(column.name)}
              </span>

              <i className="fas fa-caret-down"></i>
            </button>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
