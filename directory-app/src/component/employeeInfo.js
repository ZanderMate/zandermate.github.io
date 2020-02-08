import React from "react";
import EmployeeList from "../data/data.json";

function EmployeeInfo(props) {
  console.log(props);

  const results = EmployeeList.filter(employee => employee.firstName.toLowerCase().includes(props.search.toLowerCase()));

  return (
    <div className="text-center">
      {results.length > 0 ? (
        <ul className="list-group">
          <h2>Employees</h2>
          {results.map(result => (
            <li className="list-group-item" key={result.id}>
              <img src={result.img} alt={result.firstName} /> {result.firstName} {result.lastName} {result.email} {result.dob}
            </li>
          ))}
        </ul >
      ) : (
          <h2>No Results</h2>
        )}
    </div>
  );
}

export default EmployeeInfo;
