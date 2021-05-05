import React, { useEffect, useRef, useState } from "react";
import API from "./utils/API";
import sortObjArr from "./utils/helpers";

function App() {
  // Initialize employees state
  const [employeesData, setEmployeesData] = useState([]);

  // Initialize filtered employees state
  const [filteredData, setFilteredData] = useState([]);

  // Initialize Element Refs
  const searchInputEl = useRef(null);

  // Fetch employees data from API on component mount
  useEffect(() => {
    API.fetchUsers()
      .then((res) => {
        setEmployeesData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  // Filter dataset based on search term
  const handleSearch = (searchTerm) => {
    // Normalizer search input (convert searchTerm to lowercase)
    const normalizedSearchTerm = searchTerm.toLowerCase();

    setFilteredData(
      employeesData.filter((employee) => {
        return (
          employee.firstName.startsWith(normalizedSearchTerm) ||
          employee.lastName.startsWith(normalizedSearchTerm) ||
          employee.email.startsWith(normalizedSearchTerm)
        );
      })
    );
  };

  // Handle Search
  const handleInputChange = (e) => {
    handleSearch(searchInputEl.current.value);
  };

  const renderEmployees = () => {
    if (!filteredData.length) {
      return employeesData.map((employee, employeeIndex) => {
        return (
          <div
            className="row border-top border-bottom py-2"
            key={employeeIndex}
          >
            <div className="col">
              <span>{employee.firstName}</span>
            </div>
            <div className="col">
              <span>{employee.lastName}</span>
            </div>
            <div className="col">
              <span>{employee.gender}</span>
            </div>
            <div className="col">
              <span>{employee.email}</span>
            </div>
          </div>
        );
      });
    } else {
      return filteredData.map((employee, employeeIndex) => {
        return (
          <div
            className="row border-top border-bottom py-2"
            key={employeeIndex}
          >
            <div className="col">
              <span>{employee.firstName}</span>
            </div>
            <div className="col">
              <span>{employee.lastName}</span>
            </div>
            <div className="col">
              <span>{employee.gender}</span>
            </div>
            <div className="col">
              <span>{employee.email}</span>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <span className="navbar-brand h4 text-uppercase pb-0">
              Employee Directory
            </span>
          </div>
        </nav>
      </header>
      <main className="py-5">
        <div className="container pt-3">
          <div className="row justify-content-end">
            <div className="col">
              <h1 className="h2 fw-bold">Employees</h1>
            </div>
          </div>
          <div className="row justify-content-end">
            <form className="col-3">
              <div className="col">
                <label htmlFor="searchInput" className="visually-hidden">
                  Search Employees
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search Employees"
                  aria-label="default input example"
                  id="searchInput"
                  ref={searchInputEl}
                  onChange={handleInputChange}
                />
              </div>
            </form>
          </div>
          <div className="row g-0 pt-4">
            <div className="container">
              <div className="row py-2">
                <div className="col">
                  <button
                    className="border-0 bg-transparent"
                    data-column="firstName"
                  >
                    <span className="fw-bold">First Name</span>

                    <i className="fas fa-caret-down"></i>
                  </button>
                </div>
                <div className="col">
                  <button
                    className="border-0 bg-transparent"
                    data-column="lastName"
                  >
                    <span className="fw-bold">Last Name</span>

                    <i className="fas fa-caret-down"></i>
                  </button>
                </div>
                <div className="col">
                  <button
                    className="border-0 bg-transparent"
                    data-column="gender"
                  >
                    <span className="fw-bold">Gender</span>

                    <i className="fas fa-caret-down"></i>
                  </button>
                </div>
                <div className="col">
                  <button
                    className="border-0 bg-transparent"
                    data-column="email"
                  >
                    <span className="fw-bold">Email Address</span>

                    <i className="fas fa-caret-down"></i>
                  </button>
                </div>
              </div>
              {renderEmployees()}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
