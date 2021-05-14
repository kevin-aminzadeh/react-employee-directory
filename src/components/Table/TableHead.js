import React, { useState } from "react";
import { capitalizeString } from "../../utils/helpers";

function TableHead(props) {
  // Initialize state object to keep track of caret direction
  const [caretDown, setCaretDown] = useState(true);

  const renderCaret = (columnAccessor) => {
    // If the column being sorted by is different to the column invoking this function, don't render caret
    if (!props.sortColumn || props.sortColumn !== columnAccessor) return;

    return <i className={`fas fa-caret-${caretDown ? "down" : "up"} ms-2`}></i>;
  };

  const handleClick = (columnAccessor) => {
    // If user clicks the same column, invert the value of caretDown (i.e Flip caret direction)
    if (props.sortColumn === columnAccessor)
      setCaretDown(caretDown ? false : true);

    // If a different column is clicked and caretDown is falsy (i.e. Caret direction is up), change the direction to down (i.e. caretDown = true)
    if (!caretDown) setCaretDown(true);

    // Invoke handle sort function with the accessor name of the column being clicked
    props.handleSort(columnAccessor);
  };

  return (
    <thead>
      <tr>
        {props.columns.map((column, index) => (
          <th scope="col" key={index}>
            <button
              className="border-0 bg-transparent text-start px-0"
              onClick={() => handleClick(column.accessor)}
            >
              <span
                className={`fw-bold text-${
                  props.sortColumn === column.accessor ? "dark" : "muted"
                }`}
              >
                {capitalizeString(column.name)}
              </span>
              {renderCaret(column.accessor)}
            </button>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
