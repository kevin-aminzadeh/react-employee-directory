import React from "react";
import { capitalizeString } from "../../utils/helpers";

function TableRow(props) {
  // Highlight Search Term in Search Results
  const highlightKeyword = (text, keyword) => {
    if (!keyword || !text) return;

    // Create a RegEx pattern to match if text begins with keyword
    const regexPattern = new RegExp(`^\\b(${keyword})`, "gi");

    // Split text into subarrays where regexPattern matches
    let textArr = text.split(regexPattern);

    return (
      <span>
        {textArr.map((substr, index) => {
          return (
            // For Each Substring, if the Substring Matches the Keyword,
            // Apply Additional Styles For Keyword Highlighting,
            <span
              key={index}
              style={
                substr.toLowerCase() === keyword.toLowerCase()
                  ? { fontWeight: "bold" }
                  : {}
              }
            >
              {substr}
            </span>
          );
        })}
      </span>
    );
  };

  // Handle text rendering logic
  const renderText = (text) => {
    if (!props.searchTerm) return text;

    return highlightKeyword(text, props.searchTerm);
  };

  return (
    <tr>
      {Object.values(props.data).map((entry, index) => {
        return <td key={index}>{renderText(capitalizeString(entry))}</td>;
      })}
    </tr>
  );
}

export default TableRow;
