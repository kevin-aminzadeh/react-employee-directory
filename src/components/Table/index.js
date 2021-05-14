import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { sortObjArr, searchObjArr } from "../../utils/helpers";

function Table(props) {
  // Initialize table data state object
  const [tableData, setTableData] = useState([]);

  // Initialize filtered data state object
  const [filteredData, setFilteredData] = useState([]);

  // Initialize sort state object
  const [sortState, setSortState] = useState({
    sorted: false,
    orderDesc: false,
    sortedBy: "",
  });

  // Initialize search state object
  const [searchTerm, setSearchTerm] = useState("");

  // Sync tableData state with data prop
  useEffect(() => {
    setTableData(props.data);
  }, [props.data]);

  // Call the handleSearch function every time the value of searchTerm is updated
  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  // If data is sorted during search, run the search function again to make sure displayed results are sorted correctly
  useEffect(() => {
    if (!filteredData) return;
    handleSearch(searchTerm);
  }, [sortState]);

  // Render table name/title if one was provided as a prop
  const renderTableName = () => {
    if (props.name) return <h1 className="h2 fw-bold">{props.name}</h1>;
  };

  // Handle logic to determine the correct dataset to pass to tableBody
  const handleVisibleData = () => {
    // If there is no search term, return tableData
    if (!searchTerm) return tableData;

    // Else, if filteredData is empty (i.e. There were no matching results for the search), return null
    if (!filteredData) return null;

    // Else, return fileredData (i.e. Search results)
    return filteredData;
  };

  // Search for given term and update the filteredData state object with the resulting matches
  const handleSearch = (searchTerm) => {
    // If the search input field is emptied, clear filteredData array
    if (!searchTerm) {
      setFilteredData([]);
      return;
    }

    // Otherwise search tableData's searchable columns for values that begin with the search term and assign the results to filteredData
    setFilteredData(
      searchObjArr(searchTerm, tableData, props.searchableColumns)
    );
  };

  // Sort Table Data By Column
  const handleSort = (columnAccessor) => {
    // If data is already sorted by the selected property,
    if (sortState.sorted && sortState.sortedBy === columnAccessor) {
      // Then the user just wants to change the sort order,
      // Create a new array which holds a reversed version of the existing sorted data (i.e sorted in descending order)
      // Update the filtered data state with reversed data array
      setTableData([...tableData].reverse());

      // Update sortState by inverting the orderDesc property value
      setSortState({
        ...sortState,
        orderDesc: sortState.orderDesc ? false : true,
      });

      return;
    }

    // Update The tableData State Object with a sorted version of itself
    setTableData(sortObjArr([...tableData], { property: columnAccessor }));

    // Updated sortState to reflect that data is currently sorted by chosen element
    setSortState({ ...sortState, sorted: true, sortedBy: `${columnAccessor}` });
  };

  return (
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-4">{renderTableName()}</div>
        <div className="col col-lg-3">
          <div className="d-flex justify-content-between h-100">
            <SearchBar setSearchTerm={setSearchTerm} />
          </div>
        </div>
      </div>
      <div className="row g-0 mt-3 px-5 py-3 mx-auto bg-white">
        <div className="table-responsive-lg ">
          <table className="table table-borderless table-hover">
            <TableHead
              columns={[...props.columns]}
              handleSort={handleSort}
              sortColumn={sortState.sortedBy}
            />
            <TableBody columns={props.columns} data={handleVisibleData()} />
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
