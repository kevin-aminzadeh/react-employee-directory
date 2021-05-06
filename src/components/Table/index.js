import React, { useEffect, useRef, useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { sortObjArr, searchObjArr } from "../../utils/helpers";

function Table(props) {
  // Initialize filtered data state
  const [filteredData, setFilteredData] = useState([]);

  // Initialize sort state
  const [sortState, setSortState] = useState({ sortOrder: "", sortedBy: "" });

  // Sync tableData state with data prop
  useEffect(() => {
    setFilteredData(props.data);
  }, [props.data]);

  useEffect(() => {
    // Otherwise pass search term to handleSearch method
    handleSearch(props.searchTerm);
  }, [props.searchTerm]);

  // Search for given term and update the filteredData state object with the resulting matches
  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredData(props.data);
      return;
    }
    setFilteredData(
      searchObjArr(searchTerm, filteredData, props.searchableColumns)
    );
  };

  const handleSort = (e) => {
    // Store a reference to the name of property to sort by for later use
    const propertyName = e.target.parentElement.dataset.column;

    // If data is already sorted by the selected property,
    if (sortState.sortOrder && sortState.sortedBy === propertyName) {
      // Then the user just wants to change the sort order,
      // Create a new array which holds a reversed version of the existing sorted data (i.e sorted in descending order)
      const reversedState = [...filteredData].reverse();

      // Update the filtered data state with reversed data array
      setFilteredData(reversedState);
      setSortState({ ...sortState, sortOrder: "desc" });
      return;
    }

    // Otherwise update state with a sorted version of data
    setFilteredData(sortObjArr(filteredData, { property: propertyName }));

    // Updated sortState to reflect that data is currently sorted by chosen element
    setSortState({ sortOrder: "asc", sortedBy: `${propertyName}` });
  };

  return (
    <div className="table-responsive-lg ">
      <table className="table table-borderless table-hover">
        <TableHead
          columns={[
            { name: "First Name", value: "firstName" },
            { name: "Last Name", value: "lastName" },
            { name: "Gender", value: "gender" },
            { name: "Email Address", value: "email" },
            { name: "State", value: "state" },
            { name: "City", value: "city" },
          ]}
          handleSort={handleSort}
        />
        <TableBody
          columns={props.columns}
          data={filteredData.length ? filteredData : props.data}
        />
      </table>
    </div>
  );
}

export default Table;
