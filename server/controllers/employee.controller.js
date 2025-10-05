// backend/controllers/employee.controller.js
const Employee = require('../models/employee.model');

// CREATE: Add a new employee
exports.createEmployee = async (req, res) => {
  try {
    // We get the employee details from the request's body
    const newEmployee = await Employee.create(req.body);
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// READ: Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ: Get a single employee by their ID
exports.getEmployeeById = async (req, res) => {
  try {
    // The ID comes from the URL parameters
    const employee = await Employee.findByPk(req.params.id);
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE: Modify an existing employee
exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (employee) {
      // The update method applies the changes from the request body
      await employee.update(req.body);
      res.status(200).json(employee);
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE: Remove an employee
exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (employee) {
      // The destroy method removes the record from the database
      await employee.destroy();
      res.status(204).send(); // 204 No Content indicates success
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};