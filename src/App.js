import React, { useEffect, useRef, useState } from "react";
import API from "./utils/API";
import Header from "./components/Header";
import Table from "./components/Table";
import SearchBar from "./components/SearchBar";

function App() {
  // Initialize employees state
  const [employeesData, setEmployeesData] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch employees data from API on component mount
  useEffect(() => {
    API.fetchUsers()
      .then((res) => {
        setEmployeesData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  // Handle Search Event
  const handleInputChange = (searchTerm) => {
    setSearch(searchTerm);
  };

  const renderTable = () => {
    const columnNames = employeesData.length
      ? Object.keys(employeesData[0])
      : [];

    return (
      <Table
        data={employeesData}
        columns={columnNames}
        searchTerm={search}
        searchableColumns={["firstName", "lastName", "email", "state", "city"]}
      />
    );
  };

  return (
    <div className="App">
      <Header></Header>
      <main className="py-5 ">
        <div className="container pt-3">
          <div className="row justify-content-end">
            <div className="col">
              <h1 className="h2 fw-bold">Employees</h1>
            </div>
            <div className="col col-lg-3">
              <SearchBar handleSearch={handleInputChange} />
            </div>
          </div>
          <div className="row g-0 mt-3 px-5 py-3 mx-auto bg-white">
            {renderTable()}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
