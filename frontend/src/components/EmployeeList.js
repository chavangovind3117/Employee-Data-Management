import React from 'react';
import { useEmployees } from '../context/EmployeeContext';

const EmployeeList = ({ onEdit }) => { 
  const { employees, deleteEmployee } = useEmployees();

  if (employees.length === 0) {
    return <p>No employees found. Add one using the form above!</p>;
  }

  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.position}</td>
              <td>
                <button className="edit" onClick={() => onEdit(employee)}>
                  Edit
                </button>
                <button 
                  className="delete" 
                  onClick={() => deleteEmployee(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;