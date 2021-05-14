import React, { useEffect, useState } from "react";
import API from "./utils/API";
import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  // Initialize employees state
  const [employeesData, setEmployeesData] = useState([]);

  // Fetch employees data from API on component mount
  useEffect(() => {
    API.fetchUsers()
      .then((res) => {
        setEmployeesData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const renderTable = () => {
    return (
      <Table
        name="Employees"
        data={employeesData}
        columns={[
          { name: "First Name", accessor: "firstName" },
          { name: "Last Name", accessor: "lastName" },
          { name: "Gender", accessor: "gender" },
          { name: "Email Address", accessor: "email" },
          { name: "State", accessor: "state" },
          { name: "City", accessor: "city" },
        ]}
        searchableColumns={["firstName", "lastName", "email", "state", "city"]}
        filterableColumns={["gender", "state", "city"]}
      />
    );
  };

  return (
    <div className="App">
      <Header></Header>
      <main className="py-5 ">
        <div className="container pt-3">{renderTable()}</div>
      </main>
    </div>
  );
}

export default App;
