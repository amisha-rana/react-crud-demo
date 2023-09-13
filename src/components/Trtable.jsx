import React from "react";

const Trtable = ({ employee, deleteEmployee, employeeIndex }) => {
  return (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.age}</td>
      <td>
        <img src={employee.avatar} alt="" height={"100px"} width={"100px"} />
      </td>
      <td>{employee.city}</td>

      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            deleteEmployee(employee.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Trtable;
