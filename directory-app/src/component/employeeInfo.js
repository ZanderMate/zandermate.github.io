import React from "react";
import "./style.css";
import data from "../data/data.json";

function EmployeeInfo(props) {

  const results = data.filter(employee => employee.lastName.toLowerCase().includes(props.search.toLowerCase()));

  return (
    <div className="text-center">
      {results.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Sort by:</th>
              <th><button
                  className="btn"
                  onClick={() => props.sortBy('firstName')}
                >
                  First Name
                </button></th>
              <th>
              <button
                  className="btn"
                  onClick={() => props.sortBy('lastName')}
                >
                  Last Name
                </button>
              </th>
              <th>
              <button
                  className="btn"
                  onClick={() => props.sortBy('email')}
                >
                  Email
                </button>
              </th>
              <th>
                <button
                  className="btn"
                  onClick={() => props.sortBy('dob')}
                >
                  DOB
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              results.map(row => (
                <tr className="employee-info">
                  <td>
                    <img src={row.img} alt={row.firstName}></img>
                  </td>
                  <td>{row.firstName}</td>
                  <td>{row.lastName}</td>
                  <td>{row.email}</td>
                  <td>{row.dob}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      ) : (
          <h5>No Employees Follow Those Criteria</h5>
        )}
    </div>
  );
}

export default EmployeeInfo;
