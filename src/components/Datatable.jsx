import axios from "axios";
import Trtable from "./Trtable";
import React, { useEffect, useState } from "react";

const Datatable = () => {
  const [employees, setEmployees] = useState([]);

  const deleteEmployee = (id) => {
    //console.log("Delete called for " + id);

    axios
      .delete("https://64c1dbe0fa35860baea0e472.mockapi.io/employee/" + id)
      .then((res) => {
        let _employees = employees.filter((employee) => employee.id != id);
        setEmployees(_employees);
      });
  };

  useEffect(() => {
    axios
      .get("https://64c1dbe0fa35860baea0e472.mockapi.io/employee")
      .then((res) => {
        setEmployees(res.data);
      });
  }, []);

  return (
    <div>
      <table className="container table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Avtar</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, employeeIndex) => (
            <Trtable
              employee={employee}
              deleteEmployee={deleteEmployee}
              employeeIndex={employeeIndex}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datatable;
