# React Employee Directory ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

<p align="center">
  <img src="./public/assets/img/demo.gif" alt="React Employee Directory Demo">
</p>
<p align="center">

  <p align="center">
    <br />
    <a href="https://kevin-aminzadeh.github.io/react-employee-directory">View Live Demo</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ul>
        <li><a href="#technologies-used">Technologies Used</a></li>
        <li><a href="#acceptance-criteria">Acceptance Criteria</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#future-improvements">Future Improvements</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>
<br>

## Overview

Employee Directory is a React.js based frontend web application which allows for searching and sorting of employee data. The purpose behind the development of this project is to demonstrate a good understanding of various React concepts including state management and component decomposition.

### Technologies Used

Employee Directory utilizes the following packages:

- [React.js](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [Bootstrap v5.0](https://github.com/SBoudrias/Inquirer.js#readme)

### Acceptance Criteria

```
Given a table of random users generated from the Random User API, when the user loads the page, a table of employees should render.
The user should be able to:

- Sort the table by at least one category
- Filter the users by at least one property.

```

## Getting Started

To get a local copy of this project up and running follow these simple steps.

### Prerequisites

First you must install [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/get-npm) if you haven't done so already. Once this is done, follow the installation instructions below to run the application locally.

### Installation

1. Clone the repository.
   ```sh
   git clone https://github.com/kevin-aminzadeh/react-employee-directory
   ```
2. Navigate to the repository directory and run the following command to install the necessary NPM packages.
   ```sh
   npm install
   ```
3. Run the app start script.
   ```sh
   npm start
   ```

## Future Improvements

Due to the relative simplicity of this project, there are various avenues for improvement.

Some noteworthy improvements which could be made include:

- Further refactoring and decomposition of key components to in order to improve component reusability
- Implementing pagination of table data.
- Implementing a "Filter BY" feature which allows users to filter table data by unique column values or min/max range for columns holding numeric values.

## License

This project is licensed under the terms of the [MIT license](https://opensource.org/licenses/MIT).
