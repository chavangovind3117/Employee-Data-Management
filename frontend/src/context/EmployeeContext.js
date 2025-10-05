import React, { createContext, useState, useEffect, useContext } from 'react';
import * as employeeService from '../services/employeeService';

// 1. Create the context
const EmployeeContext = createContext();

// Custom hook to use the context 
export const useEmployees = () => {
  return useContext(EmployeeContext);
};

// 2. Create the provider component
export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const data = await employeeService.getAllEmployees();
      setEmployees(data);
    };
    fetchEmployees();
  }, []);

  const addEmployee = async (employeeData) => {
    const newEmployee = await employeeService.createEmployee(employeeData);
    setEmployees(prev => [...prev, newEmployee]);
  };

  const updateEmployee = async (id, employeeData) => {
    const updatedEmployee = await employeeService.updateEmployee(id, employeeData);
    setEmployees(prev => prev.map(emp => (emp.id === id ? updatedEmployee : emp)));
  };

  const deleteEmployee = async (id) => {
    await employeeService.deleteEmployee(id);
    setEmployees(prev => prev.filter(emp => emp.id !== id));
  };

  // 3. Provide the state and functions to children
  const value = {
    employees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
  };

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
};