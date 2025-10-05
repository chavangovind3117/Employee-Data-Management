// frontend/src/components/EmployeeForm.js
import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ onSubmit, initialData = null }) => {
  const [formData, setFormData] = useState({ name: '', email: '', position: '' });

  // Determine if we are in "edit" mode
  const isEditMode = Boolean(initialData);

  // Pre-fill the form if we are in edit mode
  useEffect(() => {
    if (isEditMode) {
      setFormData(initialData);
    }
  }, [initialData, isEditMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Call the passed-in submit function
    if (!isEditMode) {
      // Clear form only when creating a new employee
      setFormData({ name: '', email: '', position: '' });
    }
  };

  return (
    <div className="form-container">
      <h2>{isEditMode ? 'Edit Employee' : 'Add New Employee'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text" name="name" placeholder="Name"
          value={formData.name} onChange={handleChange} required
        />
        <input
          type="email" name="email" placeholder="Email"
          value={formData.email} onChange={handleChange} required
        />
        <input
          type="text" name="position" placeholder="Position"
          value={formData.position} onChange={handleChange} required
        />
        <button type="submit">{isEditMode ? 'Update Employee' : 'Add Employee'}</button>
      </form>
    </div>
  );
};

export default EmployeeForm;