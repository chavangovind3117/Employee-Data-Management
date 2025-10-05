import axios from 'axios';

// api instance with base URL

const apiClient = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: { 'Content-Type': 'application/json' },
});

// get all employees
export const getAllEmployees = async () => {
    try {
        const response = await apiClient.get('/employees');
        return response.data;
    } catch (error) {
        console.log("Error while fetching getAllEmployees API", error);
        throw error;
    }
};

// create new employee
export const createEmployee = async (employeesData) =>{
    try {
        const response = await apiClient.post('/employees', employeesData);
        return response.data
    } catch (error) {
        console.log("Error while creating createEmployee API", error);
        throw error;
    }
};

// update employee
export const updateEmployee = async (id, employeesData) =>{
    try {
        const response = await apiClient.put(`/employees/${id}`, employeesData);
        return response.data;
    } catch (error) {
        console.log("Error while updating updateEmployee API", error);
        throw error;
    }
};

// delete employee
export const deleteEmployee = async (id) =>{
    try {
        const response = await apiClient.delete(`/employees/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error while deleting deleteEmployee API", error);
        throw error;
    }
};
