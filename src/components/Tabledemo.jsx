import React, { useEffect, useState } from "react";
import Trdemo from "./Trdemo";
import axios from "axios";

const Tabledemo = () => {
  const [employees, setEmployees] = useState([]);

  const DeleteEmployee = (id) => {
    axios
      .delete("https://64c1dbe0fa35860baea0e472.mockapi.io/employee/" + id)
      .then((response) => {
        let _employees = employees.filter((employee) => employees.id != id);
        setEmployees(_employees);
      });
  };

  useEffect(() => {
    axios
      .get("https://64c1dbe0fa35860baea0e472.mockapi.io/employee")
      .then((response) => {
        setEmployees(response.data);
      });
  }, []);
  return (
    <>
      <table className="container table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>Image</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, employeeIndex) => (
            <Trdemo
              employee={employee}
              key={employeeIndex}
              DeleteEmployee={DeleteEmployee}
              employeeIndex={employeeIndex}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Tabledemo;
