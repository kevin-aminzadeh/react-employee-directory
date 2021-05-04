import React, { useEffect, useRef, useState } from "react";

function App() {
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
                ></input>
              </div>
            </form>
          </div>
          <div className="row g-0 pt-4">
            <div className="container">
              <div className="row py-2">
                <div className="col">
                  <button className="border-0 bg-transparent">
                    <span className="fw-bold">First Name</span>

                    <i className="fas fa-caret-down"></i>
                  </button>
                </div>
                <div className="col">
                  <span className="fw-bold">Last Name</span>
                  <i className="fas fa-caret-down"></i>
                </div>
                <div className="col">
                  <span className="fw-bold">Gender</span>
                  <i className="fas fa-caret-down"></i>
                </div>
                <div className="col">
                  <span className="fw-bold">Email</span>
                  <i className="fas fa-caret-down"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
