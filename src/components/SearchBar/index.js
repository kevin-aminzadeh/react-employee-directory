import React, { useRef } from "react";

function SearchBar({ handleSearch }) {
  // Initialize Element Refs
  const searchInputEl = useRef(null);

  return (
    <div className="input-group h-100 ">
      <div className="input-group-text bg-white ps-4 rounded-0 border-0 text-muted">
        <i className="fa fa-search fa-lg"></i>
      </div>

      <input
        id="search-input"
        type="text"
        className="form-control form-control-dark border-0 rounded-0"
        placeholder="Search Employees"
        aria-label="Search"
        ref={searchInputEl}
        onChange={() => {
          handleSearch(searchInputEl.current.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
