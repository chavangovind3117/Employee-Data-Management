import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import Modal from './components/Modal';
import { useEmployees } from './context/EmployeeContext';
import './App.css';

function App() {
  const { addEmployee, updateEmployee } = useEmployees();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingEmployee(null);
  };

  const handleUpdate = async (formData) => {
    await updateEmployee(editingEmployee.id, formData);
    handleCloseModal();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Management</h1>
      </header>
      <main>
        <EmployeeForm onSubmit={addEmployee} />
        <EmployeeList onEdit={handleEdit} />
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <EmployeeForm 
            onSubmit={handleUpdate} 
            initialData={editingEmployee} 
          />
        </Modal>
      </main>
    </div>
  );
}

export default App;