import React, { useRef, useState } from "react";

function SearchBar({ setSearchTerm }) {
  // Initialize active state object
  const [active, setActive] = useState(false);

  // Initialize Element Refs
  const searchInputEl = useRef(null);

  return (
    <div className="input-group w-80" id="search-bar">
      <div className="input-group-text bg-white ps-4 rounded-0 border-0 d-lg-flex">
        <i
          className={`fa fa-search fa-lg ${
            active ? "text-primary" : "text-muted"
          }`}
        ></i>
      </div>

      <input
        id="search-input"
        type="text"
        className="form-control form-control-dark border-0 rounded-0"
        placeholder="Search Employees"
        aria-label="Search"
        ref={searchInputEl}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        onChange={() => {
          setSearchTerm(searchInputEl.current.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
