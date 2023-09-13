import React from "react";

const Trdemo = ({ employee, DeleteEmployee, employeeIndex }) => {
  return (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.age}</td>
      <td>
        <img src={employee.avatar} height={"50px"} width={"50px"} />
      </td>
      <td>{employee.city}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            DeleteEmployee(employee.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Trdemo;
